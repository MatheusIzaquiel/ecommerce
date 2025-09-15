export type ProductType = {
   id: string;
  name: string;
  price: number | null;
  description: string | null;
  image: string;
  currency?: string;
  quantity?: number | 1
}