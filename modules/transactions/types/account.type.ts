export interface ProductItem {
  id: string;
  type: string;
}

export interface UserInfo {
  fullName: string;
  profilePhoto: string;
  products: ProductItem[];
}

export interface Account {
  alias: string;
  accountNumber: number;
  balance: number;
  currency: string;
}

export interface Amount {
  currency: string;
  value: number;
}

export interface TransactionItem {
  transactionNumber: string;
  description: string;
  bankDescription: string;
  transactionType: string;
  amount: Amount;
  origin: string;
  destination: string;
  transactionDate: string;
}

export interface TransactionRequest {
  page: number;
  size: number;
  next: number;
  totalCount: number;
  items: TransactionItem[];
}
