import { create } from 'zustand';
/* stores */
import { accountStore } from './account.store';
/* types */
import { Amount, TransactionItem } from '../types';
/* repositories */
import { requestTransactionRepository } from '../repositories';

type TransactionState = 'init' | 'sent' | 'loading' | 'error';

type TransactionStore = {
  transaction: TransactionItem;

  transactionState: TransactionState;
  transactionError: string;

  requestTransaction(origin: string, destination: string, amount: Amount): void;
  confirmTransaction(cb: () => void): void;
  finishTransaction(cb: () => void): void;
};

const defaultValue: TransactionItem = {
  transactionNumber: '',
  description: '',
  bankDescription: '',
  transactionType: 'Credit',
  amount: {
    currency: '',
    value: 0,
  },
  origin: '',
  destination: '',
  transactionDate: '',
};

export const transactionStore = create<TransactionStore>((set, get) => ({
  transaction: JSON.parse(JSON.stringify(defaultValue)),

  transactionState: 'init',
  transactionError: '',

  requestTransaction: (origin: string, destination: string, amount: Amount) =>
    set(current => ({ transaction: { ...current.transaction, origin, destination, amount } })),
  confirmTransaction: async cb => {
    set({ transactionState: 'loading' });

    /* user info */
    const response = await requestTransactionRepository({
      origin: get().transaction.origin,
      destination: get().transaction.destination,
      amount: get().transaction.amount,
    });

    if (!response.success) {
      return set({ transactionState: 'error', transactionError: response.error });
    }

    set({
      transactionState: 'sent',
      transaction: response.data,
    });

    /* update user account */
    accountStore.setState(prev => ({
      transactions: [...prev.transactions, response.data],
      mainAccount: {
        ...prev.mainAccount,
        balance: prev.mainAccount.balance - response.data.amount.value,
      },
    }));

    cb();
  },
  finishTransaction: cb => {
    set({ transactionState: 'init', transaction: JSON.parse(JSON.stringify(defaultValue)) });

    cb();
  },
}));
