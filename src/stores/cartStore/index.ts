import { create } from "zustand";
import * as api from "../../api";
import { CartProduct, CartStore } from "./types";
import { USER } from "../../utils/constants";
import { toast } from "react-toastify";

export const initialProducts: CartProduct[] = [];

export const useCartStore = create<CartStore>((set, get) => ({
  products: initialProducts,
  productsLoading: false,
  totalAmount: { total: 0, discount: 0 },
  promocode: null,
  getPromocode: async (code) => {
    try {
      const response = await api.getPromocode(code);
      const { data } = response;

      set((state) => ({
        promocode: data,
        totalAmount: {
          ...state.totalAmount,
          discount: state.totalAmount.discount + data.discount,
        },
      }));
    } catch (e) {
      set(() => ({ promocode: null }));
    }
  },
  getCarts: async () => {
    set(() => ({ productsLoading: true }));
    try {
      const { data } = await api.getCarts(USER.id);
      const { carts } = data;

      const products: CartProduct[] = [];

      await Promise.all(
        carts.map(async (cart) => {
          try {
            const { data } = await api.getProduct(cart.product_id, "x-init");

            const variant = data.variants.find(
              (variant) => variant.id === cart.variant_id
            );

            if (!variant) {
              console.error(
                `Variant with ID ${cart.variant_id} not found for product ${cart.product_id}`
              );
              return; // Прерываем выполнение для этого cart
            }

            delete data.variants;

            const cartProduct: CartProduct = {
              ...data,
              variant, // Теперь это один объект, а не массив
              count: cart.quantity,
              cartId: cart.id,
            };

            products.push(cartProduct);
          } catch (error) {
            console.error(`Error fetching product ${cart.product_id}:`, error);
          }
        })
      );

      set(() => ({
        products,
        productsLoading: false,
      }));
    } catch (e) {
      toast.error(e?.detail);
      set(() => ({
        products: [],
        productsLoading: false,
      }));
    }
  },

  calculateTotalAmount: (products: CartProduct[]) => {
    const totalAmount = products.reduce(
      (acc: { total: number; discount: number }, product: CartProduct) => {
        const variantPrice = product.variant.price || 0;
        const productTotal = variantPrice * product.count;
        const productDiscount = product.discount
          ? product.discount * product.count
          : 0;

        const totalPrice = {
          total: acc.total + productTotal,
          discount: acc.discount + productDiscount,
        };

        return totalPrice;
      },
      { total: 0, discount: 0 }
    );

    set((state) => ({
      ...state,
      totalAmount,
    }));
  },

  updateProductCount: async (product, variantId, newCount, userId) => {
    try {
      await api.updateCart(userId, {
        variant_id: variantId,
        user_id: userId,
        quantity: newCount,
      });
      set((state) => {
        const updatedProducts = state.products.map((item) =>
          item.cartId === product.cartId ? { ...item, count: newCount } : item
        );

        state.calculateTotalAmount(updatedProducts);

        return {
          ...state,
          products: updatedProducts,
        };
      });
    } catch (e) {
      toast.error(e?.detail);
    }
  },

  addProduct: async (newProduct, variant, userId) => {
    try {
      const state = get();

      const productExists = state.products.find(
        (product) =>
          product.id === newProduct.id && product.variant.id === variant.id
      );

      let updatedProducts: CartProduct[];
      if (productExists) {
        updatedProducts = state.products.map((product) =>
          product.id === newProduct.id && product.variant.id === variant.id
            ? { ...product, count: product.count + 1 }
            : product
        );

        // Обновление корзины в API
        await api.updateCart(userId, {
          variant_id: variant.id,
          user_id: userId,
          quantity: productExists.count + 1,
        });
      } else {
        const { variants, ...fields } = newProduct;
        const cartData = get().products.find(
          (item) => item.variant.id === variant.id
        );

        updatedProducts = [
          ...state.products,
          {
            ...fields,
            variant: variant,
            count: 1,
            cartId: cartData?.cartId || null,
          },
        ];

        // Создание корзины в API
        await api.createCart({
          variant_id: variant.id,
          user_id: userId,
          quantity: 1,
        });
      }

      set({ products: updatedProducts });
      state.calculateTotalAmount(updatedProducts);
    } catch (e) {
      toast.error(e?.detail);
    }
  },

  removeProduct: (product) => {
    try {
      api.deleteCart(product.cartId);
      set((state) => {
        const updatedProducts = state.products.filter(
          (item) => !(item.cartId === product.cartId)
        );

        state.calculateTotalAmount(updatedProducts);

        return {
          ...state,
          products: updatedProducts,
        };
      });
    } catch (e) {
      toast.error(e?.detail);
    }
  },
}));
