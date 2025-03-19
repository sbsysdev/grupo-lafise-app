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
