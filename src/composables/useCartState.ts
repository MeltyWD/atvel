export interface UserCartState {
  article: string;
  quantity: number;
  isChecked: boolean;
}

export const useCartState = () => useState<UserCartState[]>("cart", () => []);
