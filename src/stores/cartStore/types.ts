import { Product, Variant } from "../../utils/types";

export type CartProduct = Omit<Product, "variants"> & {
  variant: Variant;
  count: number;
  cartId: number;
};
export interface TotalAmount {
  total: number;
  discount: number;
}

export interface Promocode {
  name: string;
  discount: number;
  type_discount: string;
  quantity: number;
  id: number;
}
export interface CartStore {
  products: CartProduct[];
  productsLoading: boolean;
  totalAmount: TotalAmount;
  promocode: Promocode | null;
  getPromocode: (code: string) => Promise<void>;
  getCarts: () => Promise<void>;
  calculateTotalAmount: (products: CartProduct[]) => void;
  updateProductCount: (
    product: CartProduct,
    variantId: number,
    newCount: number,
    userId: number
  ) => void;
  addProduct: (
    newProduct: Product,
    variant: Variant,
    userId: number
  ) => Promise<void>;
  removeProduct: (product: CartProduct) => void;
}
