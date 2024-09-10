import {create} from "zustand";
import {Category, Favourite, Product, Variant} from "../../utils/types";
import {FAVOURITES, PRODUCTS} from "../../utils/constants";

interface State {
    activeCategory: Category | null;
    favouriteProducts:
        | { info: Favourite; variant: Variant; product: Product }[]
        | null;
}

interface Actions {
    setActiveCategory: (activeCategory: Category | null) => void;
    getFavouriteProducts: (favouriteProducts: Favourite[]) => void;
    deleteFavouriteProduct: (id: number) => void;
    initializeFavouriteProducts: () => void;
    toggleFavorite: () => void;
}

const initialState: State = {
    activeCategory: null,
    favouriteProducts: null,
};

export const useProductsStore = create<State & Actions>()((set, get) => ({
    ...initialState,
    toggleFavorite: () => {
        console.log('toggleFavorite');
    },
    setActiveCategory: (activeCategory: Category | null) => {
        set((state) => ({...state, activeCategory}));
    },

    deleteFavouriteProduct: (id: number) => {
        set((state) => ({
            favouriteProducts: state.favouriteProducts
                ? state.favouriteProducts.filter((item) => item.info.id !== id)
                : null,
        }));
    },

    getFavouriteProducts: (favouriteProducts: Favourite[]) => {
        const arr: { info: Favourite; variant: Variant; product: Product }[] =
            favouriteProducts
                .map((item) => {
                    const product = PRODUCTS.find((p) => p.id === item.product_id);
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

        set((state) => ({...state, favouriteProducts: arr}));
    },


    initializeFavouriteProducts: () => {
        const {getFavouriteProducts} = get();
        getFavouriteProducts(FAVOURITES);
    },
}));

useProductsStore.getState().initializeFavouriteProducts();