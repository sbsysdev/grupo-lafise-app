import { AxiosError, AxiosInstance, AxiosResponseHeaders, RawAxiosResponseHeaders } from 'axios';

export type Response<T extends boolean, D> = {
  success: T;
  status: number;
  data: D;
};

export interface SuccessResponse<D> extends Response<true, D> {
  message?: string;
}

export interface ErrorResponse<D = undefined> extends Response<false, D> {
  error: string;
}

export type RequestResponse<S, E> = SuccessResponse<S> | ErrorResponse<E>;

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface RequestHeaders {
  [x: string]: string | number | boolean;
}

export type SuccessResponseSerializer<R> = (
  data: any,
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders,
  status?: number
) => Promise<SuccessResponse<R>>;

export type ErrorResponseSerializer<E> = (error: AxiosError) => Promise<ErrorResponse<E>>;

/* R: request response
   E: request error
   B: request body
   P: request params
*/
export interface RequestProps<R, E, B, P> {
  // request to
  instance: AxiosInstance;
  method?: RequestMethod;
  path: string;
  // common headers
  token?: string;
  lang?: string;
  // transport data
  headers?: RequestHeaders;
  params?: P;
  body?: B;
  // response
  successSerializer: SuccessResponseSerializer<R>;
  errorSerializer: ErrorResponseSerializer<E>;
  // configuration
  abort?: AbortController;
  timeout?: number;
}

export const request = async <R, E = undefined, B = undefined, P = undefined>({
  // request to
  instance,
  method = 'GET',
  path,
  // common headers
  token,
  lang,
  // transport data
  headers,
  params,
  body,
  // response
  successSerializer,
  errorSerializer,
  // configuration
  abort,
  timeout = 5 * 1000, // 5 seg
}: RequestProps<R, E, B, P>): Promise<RequestResponse<R, E>> => {
  const requestHeaders = {
    // base headers
    'Content-Type': 'application/json',
    ...(lang && { 'Accept-Language': lang }),
    // authorization
    ...(token && { Authorization: `Bearer ${token}` }),
    // othes
    ...headers,
  };

  try {
    const response = await instance.request({
      headers: requestHeaders,
      method,
      url: path,
      params,
      data: body,
      signal: abort?.signal,
      timeout,
    });

    return successSerializer(response.data, response.headers, response.status);
  } catch (error) {
    return errorSerializer(error as AxiosError);
  }
};

export const successResponse = <R = undefined>(
  data: R,
  status?: number,
  message?: string
): SuccessResponse<R> => ({
  success: true,
  status: status ?? 200,
  message,
  data,
});

export const errorResponse = <E = undefined>(
  error: string,
  status?: number,
  data?: E
): ErrorResponse<E> => ({
  success: false,
  status: status ?? 404,
  error,
  data: data as E,
});
