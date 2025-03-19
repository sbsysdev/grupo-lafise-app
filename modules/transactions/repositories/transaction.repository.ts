/* utils */
import { errorResponse, request, successResponse } from '@/shared/utils';
/* types */
import { TransactionItem, TransactionRequest } from '../types';
/* values */
import { accountAPI } from '../values';

export const getAccountTransactionListRepository = async (accountId: string) =>
  await request<TransactionItem[]>({
    instance: accountAPI,
    path: `/accounts/${accountId}/transactions`,
    successSerializer: async (data, _, status) =>
      successResponse(
        data.items.map((item: any) => ({
          transactionNumber: item.transaction_number,
          description: item.description,
          bankDescription: item.bank_description,
          transactionType: item.transaction_type,
          amount: {
            currency: item.amount.currency,
            value: item.amount.value,
          },
          origin: item.origin,
          destination: item.destination,
          transactionDate: item.transaction_date,
        })),
        status
      ),
    errorSerializer: async error => errorResponse(error.message, error.status),
  });

export const requestTransactionRepository = async (req: TransactionRequest) =>
  await request<TransactionItem, undefined, TransactionRequest>({
    instance: accountAPI,
    path: '/transactions',
    method: 'POST',
    body: req,
    successSerializer: async (data, _, status) =>
      successResponse(
        {
          transactionNumber: data.transaction_number,
          description: data.description,
          bankDescription: data.bank_description,
          transactionType: data.transaction_type,
          amount: {
            currency: data.amount.currency,
            value: data.amount.value,
          },
          origin: data.origin,
          destination: data.destination,
          transactionDate: data.transaction_date,
        },
        status
      ),
    errorSerializer: async error => errorResponse(error.message, error.status),
  });
