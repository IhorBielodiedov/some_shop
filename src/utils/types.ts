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
  specifications: Specification[];
};
export type Specification = {
  id: number;
  title: string;
  rows: SpecificationRow[];
};
export type SpecificationRow = {
  id: number;
  name: string;
  value: string;
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
export type Review = {
  user: User;
  product_variant_id: number;
  rating: number;
  description: string;
  created_at: string;
};
export type User = {
  id: number;
  created_at: string;
  updated_at: string;
  cart: any[];
};
