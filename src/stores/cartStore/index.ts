import { create } from "zustand";
import red from "../../assets/img/product2.png";
import red_side from "../../assets/img/product2_1.png";
import black from "../../assets/img/product.png";
import black_side from "../../assets/img/product1_1.png";

export const initialProducts: any[] = [];

export const useProductStore = create<any>((set: any) => ({
  products: initialProducts,
  totalAmount: { total: 0, discount: 0 },
  calculateTotalAmount: (products: any[]) => {
    const totalAmount = products.reduce(
        (acc: { total: number; discount: number }, product: any) => {
          const variantPrice = product.variants[0].price || 0;
          const productTotal = variantPrice * product.count;
          const productDiscount = product.discount ? product.discount * product.count : 0;

          return {
            total: acc.total + productTotal,
            discount: acc.discount + productDiscount,
          };
        },
        { total: 0, discount: 0 }
    );

    set((state: any) => ({
      ...state,
      totalAmount,
    }));
  },

  updateProductCount: (productId: any, newCount: number) =>
      set((state: any) => {
        const updatedProducts = state.products.map((product: any) =>
            product.id === productId ? { ...product, count: newCount } : product
        );

        const newTotalAmount = state.calculateTotalAmount(updatedProducts);

        return {
          products: updatedProducts,
          totalAmount: newTotalAmount,
        };
      }),

  addProduct: (newProduct: any) =>
      set((state: any) => {
        const productExists = state.products.find(
            (product: any) => product.id === newProduct.id
        );

        let updatedProducts;
        if (productExists) {
          updatedProducts = state.products.map((product: any) =>
              product.id === newProduct.id
                  ? { ...product, count: product.count + 1 }
                  : product
          );
        } else {
          updatedProducts = [...state.products, { ...newProduct, count: 1 }];
        }

        const newTotalAmount = state.calculateTotalAmount(updatedProducts);

        return {
          products: updatedProducts,
          totalAmount: newTotalAmount,
        };
      }),

  removeProduct: (productId: any) =>
      set((state: any) => {
        const updatedProducts = state.products.filter(
            (product: any) => product.id !== productId
        );

        const newTotalAmount = state.calculateTotalAmount(updatedProducts);

        return {
          products: updatedProducts,
          totalAmount: newTotalAmount,
        };
      }),
}));