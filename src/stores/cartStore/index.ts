import { create } from "zustand";

export const initialProducts: any[] = [];

export const useCartStore = create<any>((set: any) => ({
    products: initialProducts,
    totalAmount: { total: 0, discount: 0 },

    calculateTotalAmount: (products: any[]) => {
        const totalAmount = products.reduce(
            (acc: { total: number; discount: number }, product: any) => {
                const variantPrice = product.variant.price || 0;
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

    updateProductCount: (productId: any, variantId: any, newCount: number) =>
        set((state: any) => {
            const updatedProducts = state.products.map((product: any) =>
                product.id === productId && product.variant.id === variantId
                    ? { ...product, count: newCount }
                    : product
            );

            state.calculateTotalAmount(updatedProducts);

            return {
                ...state,
                products: updatedProducts,
            };
        }),

    addProduct: (newProduct: any, variant: any) =>
        set((state: any) => {
            const productExists = state.products.find(
                (product: any) => product.id === newProduct.id && product.variant.id === variant.id
            );

            let updatedProducts;
            if (productExists) {
                updatedProducts = state.products.map((product: any) =>
                    product.id === newProduct.id && product.variant.id === variant.id
                        ? { ...product, count: product.count + 1 }
                        : product
                );
            } else {
                updatedProducts = [
                    ...state.products,
                    { ...newProduct, variant: variant, count: 1 },
                ];
            }

            state.calculateTotalAmount(updatedProducts);

            return {
                ...state,
                products: updatedProducts,
            };
        }),

    removeProduct: (productId: any, variantId: any) =>
        set((state: any) => {
            const updatedProducts = state.products.filter(
                (product: any) => !(product.id === productId && product.variant.id === variantId)
            );

            state.calculateTotalAmount(updatedProducts);

            return {
                ...state,
                products: updatedProducts,
            };
        }),
}));