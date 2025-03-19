/* utils */
import { errorResponse, request, successResponse } from '@/shared/utils';
/* types */
import { Account, UserInfo } from '../types';
/* values */
import { accountAPI } from '../values';

export const getUserInfoRepository = async (userId: string) =>
  await request<UserInfo>({
    instance: accountAPI,
    path: `/users/${userId}`,
    successSerializer: async (data, _, status) =>
      successResponse(
        { fullName: data.full_name, profilePhoto: data.profile_photo, products: data.products },
        status
      ),
    errorSerializer: async error => errorResponse(error.message, error.status),
  });

export const getAccountRepository = async (accountId: string) =>
  await request<Account>({
    instance: accountAPI,
    path: `/accounts/${accountId}`,
    successSerializer: async (data, _, status) =>
      successResponse(
        {
          alias: data.alias,
          accountNumber: data.account_number,
          balance: data.balance,
          currency: data.currency,
        },
        status
      ),
    errorSerializer: async error => errorResponse(error.message, error.status),
  });
