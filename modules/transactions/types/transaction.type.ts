export interface Amount {
  currency: string;
  value: number;
}

export type TransactionType = 'Credit' | 'Debit';

export interface TransactionItem {
  transactionNumber: string;
  description: string;
  bankDescription: string;
  transactionType: TransactionType;
  amount: Amount;
  origin: string;
  destination: string;
  transactionDate: string;
}

export interface TransactionListResponse {
  page: number;
  size: number;
  next: number;
  totalCount: number;
  items: TransactionItem[];
}

export interface TransactionRequest {
  origin: string;
  destination: string;
  amount: Amount;
}
