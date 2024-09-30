import { useEffect } from "react";
import FavouriteCard from "../../components/FavouriteCard";
import { useProductsStore } from "../../stores/useProductsStore";
import { FAVOURITES, PRODUCTS, TELEGRAM } from "../../utils/constants";
import styles from "./favouriteProductsPage.module.scss";
import { useNavigate } from "react-router-dom";

const FavouriteProductsPage = () => {

  const favouriteProducts = useProductsStore(
    (state) => state.favouriteProducts
  );
  const getFavouriteProducts = useProductsStore(
    (state) => state.getFavouriteProducts
  );
  const deleteFavouriteProduct = useProductsStore(
      (state) => state.deleteFavouriteProduct
  );

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  //useEffect(() => getFavouriteProducts(FAVOURITES), []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (window.history.length > 1) {
      TELEGRAM.BackButton.show();
      TELEGRAM.BackButton.onClick(goBack);
    } else {
      TELEGRAM.BackButton.hide();
    }
    return () => {
      TELEGRAM.BackButton.offClick(goBack);
    };
  }, []);

  console.log(favouriteProducts);
  return (
    <div className={styles.container}>
      {favouriteProducts &&
        favouriteProducts.map((item, index) => (
          <FavouriteCard
            product={item.product}
            variant={item.variant}
            info={item.info}
            key={index}
            deleteFavorite={deleteFavouriteProduct}
          />
        ))}
    </div>
  );
};
export default FavouriteProductsPage;
