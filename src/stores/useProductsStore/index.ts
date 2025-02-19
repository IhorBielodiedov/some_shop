import { create } from "zustand";
import {
  Category,
  Favourite,
  GetProductsParams,
  Product,
  Variant,
} from "../../utils/types";
import * as api from "../../api";
import { toast } from "react-toastify";
import { USER } from "../../utils/constants";
import axios from "axios";

interface State {
  categories: Array<Category> | null;
  categoriesLoading: boolean;
  products: Array<Product> | null;
  productsLoading: boolean;
  currentProduct: Product | null;
  currentProductLoading: boolean;
  activeCategory: Category | null;
  favouriteProducts:
    | { info: Favourite; variant: Variant; product: Product }[]
    | null;
}

interface Actions {
  getCategories: () => void;
  getProducts: (activeCategoryId: number, params?: GetProductsParams) => void;
  getCurrentProduct: (id: number) => void;
  setActiveCategory: (activeCategory: Category | null) => void;
  getFavouriteProducts: (favouriteProducts: Favourite[]) => void;
  deleteFavouriteProduct: (id: number) => void;
  initializeFavouriteProducts: () => void;
  toggleFavorite: (
    product: Product,
    in_favorite: boolean,
    variantIndex: number
  ) => void;
}

const initialState: State = {
  categories: null,
  categoriesLoading: false,
  products: null,
  productsLoading: false,
  currentProduct: null,
  currentProductLoading: false,
  activeCategory: {
    name: "Весь каталог устройств",
    description: "Все",
    photo: "",
    id: 1,
  },
  favouriteProducts: null,
};

export const useProductsStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  getCategories: async () => {
    set(() => ({ categoriesLoading: true }));
    try {
      const { data } = await api.getCategories();
      set(() => ({ categories: data.categories, categoriesLoading: false }));
    } catch (e) {
      set(() => ({ categoriesLoading: false }));
      toast.error(e);
    }
  },
  getProducts: async (activeCategoryId, params) => {
    try {
      set(() => ({ productsLoading: true }));
      if (activeCategoryId === 1) {
        const { data } = await api.getAllProducts(params, "x");
        set(() => ({ products: data.products }));
      } else {
        const { data } = await api.getProductsByCategory(activeCategoryId, "x");
        set(() => ({ products: data.products }));
      }
      set(() => ({ productsLoading: false }));
    } catch (e) {
      toast.error(e);
      set(() => ({ productsLoading: false }));
    }
  },
  getCurrentProduct: async (id) => {
    try {
      set(() => ({ currentProductLoading: true }));
      const { data: product } = await api.getProduct(id, "x");

      const currentProduct = product;
      set(() => ({ currentProduct }));
      set(() => ({ currentProductLoading: false }));
    } catch (e) {
      toast.error(e);
      set(() => ({ currentProductLoading: false }));
    }
  },
  toggleFavorite: (
    product: Product,
    in_favorite: boolean,
    variantIndex: number
  ) => {
    product.variants[variantIndex].in_favorite = in_favorite;

    set(() => ({ currentProduct: { ...product } }));
  },
  setActiveCategory: (activeCategory: Category | null) => {
    set((state) => ({ ...state, activeCategory }));
  },

  deleteFavouriteProduct: async (id: number) => {
    try {
      await api.deleteFavorite(id, USER.id);
      set((state) => ({
        favouriteProducts: state.favouriteProducts
          ? state.favouriteProducts.filter((item) => item.info.id !== id)
          : null,
      }));
    } catch (error) {
      if (error.response) {
        if (axios.isAxiosError(error)) {
          toast.error(`${error.response.data?.detail}`);
          console.error(error);
        }
      }
    }
  },
  getFavouriteProducts: async (favouriteProducts: Favourite[]) => {
    await get().getProducts(1);
    const arr: { info: Favourite; variant: Variant; product: Product }[] =
      favouriteProducts
        .map((item) => {
          const product = get().products?.find((p) => p.id === item.id);
          if (product) {
            const variant = product.variants.find(
              (v) => v.id === item.variant_id
            );
            if (variant) {
              return {
                info: item,
                variant: variant,
                product: product,
              };
            }
          }
          return null;
        })
        .filter(
          (
            item
          ): item is { info: Favourite; variant: Variant; product: Product } =>
            item !== null
        );

    set((state) => ({ ...state, favouriteProducts: arr }));
  },

  initializeFavouriteProducts: async () => {
    const { getFavouriteProducts } = get();
    const { data } = await api.getFavorites(USER.id);
    getFavouriteProducts(data.products);
  },
}));

useProductsStore.getState().initializeFavouriteProducts();
