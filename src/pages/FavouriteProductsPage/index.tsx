import { useEffect } from "react";
import FavouriteCard from "../../components/FavouriteCard";
import { useProductsStore } from "../../stores/useProductsStore";
import { TELEGRAM } from "../../utils/constants";
import styles from "./favouriteProductsPage.module.scss";
import { useNavigate } from "react-router-dom";

const FavouriteProductsPage = () => {
  const favouriteProducts = useProductsStore(
    (state) => state.favouriteProducts
  );

  const deleteFavouriteProduct = useProductsStore(
    (state) => state.deleteFavouriteProduct
  );

  const initializeFavouriteProducts = useProductsStore(
    (state) => state.initializeFavouriteProducts
  );

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchData = async () => {
      await initializeFavouriteProducts();
    };
    fetchData();
  }, [initializeFavouriteProducts]);

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
      {favouriteProducts && favouriteProducts?.length === 0 && (
        <p>Здесь пока ничего нет</p>
      )}
    </div>
  );
};
export default FavouriteProductsPage;
