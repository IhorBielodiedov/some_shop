import {create} from "zustand";
import {Category, Favourite, Product, Variant} from "../../utils/types";
import {FAVOURITES, PRODUCTS} from "../../utils/constants";
import {log} from "node:util";

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
    toggleFavorite: (favourite: Favourite) => void;
}

const initialState: State = {
    activeCategory: null,
    favouriteProducts: null,
};

export const useProductsStore = create<State & Actions>()((set, get) => ({
    ...initialState,
    toggleFavorite: (favourite: Favourite) => {
        const { favouriteProducts } = get();

        const product = PRODUCTS.find((p) => p.id === favourite.product_id);
        if (!product) return;

        const variant = product.variants.find((v) => v.id === favourite.variant_id);
        if (!variant) return;

        const isAlreadyFavourite = favouriteProducts
            ? favouriteProducts.some(
                (item) =>
                    item.info.product_id === favourite.product_id &&
                    item.info.variant_id === favourite.variant_id
            )
            : false;

        if (isAlreadyFavourite) {
            set((state) => ({
                favouriteProducts: state.favouriteProducts
                    ? state.favouriteProducts.filter(
                        (item) =>
                            item.info.product_id !== favourite.product_id ||
                            item.info.variant_id !== favourite.variant_id
                    )
                    : null,
            }));
        } else {
            // Add to favourites
            const newFavourite = {
                info: favourite,
                variant: variant,
                product: product,
            };
            set((state) => ({
                favouriteProducts: state.favouriteProducts
                    ? [...state.favouriteProducts, newFavourite]
                    : [newFavourite],
            }));
        }
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