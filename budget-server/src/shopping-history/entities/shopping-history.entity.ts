export class ShoppingHistory {}
export type ShoppingItem = {
  name: string;
  price: string;
  measurement: string;
  total: string;
  date: string;
  tag: { name: string; id: number; color: string | null }[];
  quantity: number;
};
