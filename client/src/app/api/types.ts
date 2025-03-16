export type ShoppingItem = {
  id: number;
  name: string;
  price: string;
  measurement: string;
  total: string;
  date: string;
  tag: Tag[];
  quantity: number;
};

export type Tag = { name: string; id: number; color: string | null };

export type ItemName = { name: string; id: number; note: string | null };

export type User = { name: string; id: number; email: string; avatar: string };
