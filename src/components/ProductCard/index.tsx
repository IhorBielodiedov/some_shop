import CardLayout from "../../UI/CardLayout";
import styles from "./productCard.module.scss";
import { Product } from "../../utils/types";
import FavoriteButton from "../../UI/FavoriteButton";
import { useProductsStore } from "../../stores/useProductsStore";
import { useState } from "react";
import * as api from "../../api";
import { USER } from "../../utils/constants";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { id, name, variants } = product;
  const toggleFavorite = useProductsStore((state) => state.toggleFavorite);

  const [isFavorite, setIsFavorite] = useState(product.variants[0].in_favorite);

  return (
    <>
      <div className={styles.container}>
        <FavoriteButton
          isFavorite={isFavorite}
          setIsFavorite={async () => {
            if (product && product.variants[0]) {
              if (product.variants[0]?.in_favorite) {
                await api.deleteFavorite(product.variants[0]?.id, USER.id);
                toggleFavorite(product, false, 0);
                setIsFavorite(false);
              } else {
                await api.createFavorite(product.variants[0]?.id, USER.id);
                toggleFavorite(product, true, 0);
                setIsFavorite(true);
              }
            }
          }}
        />
        <CardLayout id={id} variant={0}>
          <img
            src={product.variants[0].photos[0]}
            alt="product"
            className={styles.img}
          />
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>{variants[0].price}р.</p>
        </CardLayout>
      </div>
    </>
  );
};
export default ProductCard;
