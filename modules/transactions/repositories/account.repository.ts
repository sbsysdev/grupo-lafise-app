/* utils */
import { errorResponse, request, successResponse } from '@/shared/utils';
/* types */
import { Account, TransactionItem, UserInfo } from '../types';
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
