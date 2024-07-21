export type Product = {
  id: number;
  name: string;
  description: string;
  category_id: number;
  variants: Variant[];
  count_variants: number;
};
export type Variant = {
  color: string;
  price: number;
  photos: string[];
  stock_quantity: number;
  id: number;
};
