import { create } from 'zustand';
/* types */
import { Account, TransactionItem, UserInfo } from '../types';
import {
  getAccountRepository,
  getAccountTransactionListRepository,
  getUserInfoRepository,
} from '../repositories';
import { testUserId } from '../values';

type UserState = 'init' | 'loaded' | 'loading' | 'error';

type AccountStore = {
  user: UserInfo;

  mainAccount: Account;
  transactions: TransactionItem[];

  userState: UserState;
  userError: string;

  requestUserInfo(): void;
};

export const accountStore = create<AccountStore>((set, get) => ({
  user: { fullName: '', profilePhoto: '', products: [] },
  mainAccount: {
    alias: '',
    accountNumber: 0,
    balance: 0,
    currency: '',
  },
  transactions: [],

  userState: 'init',
  userError: '',

  requestUserInfo: async () => {
    /* due to server type, perform bulk request */
    set({ userState: 'loading' });

    /* user info */
    const userResponse = await getUserInfoRepository(testUserId);

    if (!userResponse.success) return set({ userState: 'error', userError: userResponse.error });

    /* account */
    const accountResponse = await getAccountRepository(userResponse.data.products[0].id);

    if (!accountResponse.success)
      return set({ userState: 'error', userError: accountResponse.error });

    /* account transactions */
    const transactionListResponse = await getAccountTransactionListRepository(
      userResponse.data.products[0].id
    );

    if (!transactionListResponse.success)
      return set({ userState: 'error', userError: transactionListResponse.error });

    set({
      userState: 'loaded',
      user: userResponse.data,
      mainAccount: accountResponse.data,
      transactions: transactionListResponse.data,
    });
  },
}));
