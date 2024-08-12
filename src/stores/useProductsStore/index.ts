import { create } from "zustand";
import { Category, Favourite, Product, Variant } from "../../utils/types";
import { PRODUCTS } from "../../utils/constants";

interface State {
  activeCategory: Category | null;
  favouriteProducts:
    | { info: Favourite; variant: Variant; product: Product }[]
    | null;
}
interface Actions {
  setActiveCategory: (activeCategory: Category | null) => void;
  getFavouriteProducts: (favouriteProducts: Favourite[]) => void;
}
const initialState: State = {
  activeCategory: null,
  favouriteProducts: null,
};
export const useProductsStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  setActiveCategory: (activeCategory: Category | null) => {
    console.log(activeCategory);
    set((state) => ({ ...state, activeCategory }));
  },
  getFavouriteProducts: (favouriteProducts: Favourite[]) => {
    const arr: { info: Favourite; variant: Variant; product: Product }[] =
      favouriteProducts
        .map((item, index) => {
          if (item.product_id === PRODUCTS[index].id) {
            return {
              info: item,
              variant: PRODUCTS[index].variants[item.variant_id],
              product: PRODUCTS[index],
            };
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
}));
