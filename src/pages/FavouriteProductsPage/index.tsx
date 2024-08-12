import { useEffect } from "react";
import FavouriteCard from "../../components/FavouriteCard";
import { useProductsStore } from "../../stores/useProductsStore";
import { FAVOURITES, PRODUCTS } from "../../utils/constants";
import styles from "./favouriteProductsPage.module.scss";

const FavouriteProductsPage = () => {
  const favouriteProducts = useProductsStore(
    (state) => state.favouriteProducts
  );
  const getFavouriteProducts = useProductsStore(
    (state) => state.getFavouriteProducts
  );

  useEffect(() => getFavouriteProducts(FAVOURITES), []);

  return (
    <div className={styles.container}>
      {favouriteProducts &&
        favouriteProducts.map((item) => (
          <FavouriteCard
            product={item.product}
            variant={item.variant}
            info={item.info}
          />
        ))}
    </div>
  );
};
export default FavouriteProductsPage;
