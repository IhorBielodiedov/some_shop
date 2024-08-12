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
  is_favorite: boolean;
};
export type Category = {
  id: number | null;
  name: string;
  alias?: string;
  photo?: string;
};
export type Favourite = {
  id: number;
  product_id: number;
  variant_id: number;
  quantity: number;
  in_stock: number;
  price: number;
};
