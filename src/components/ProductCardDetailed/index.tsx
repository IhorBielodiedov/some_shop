import CardLayout from "../../UI/CardLayout";
import styles from "./productCardDetailed.module.scss";
import { Product } from "../../utils/types";
import MediumButton from "../../UI/MediumButton";
import FavoriteButton from "../../UI/FavoriteButton";
import { useEffect } from "react";
import { useCartStore } from "../../stores/cartStore";
import { useProductsStore } from "../../stores/useProductsStore";
import { toast } from "react-toastify";

interface Props {
  product: Product;
}

const ProductCardDetailed = ({ product }: Props) => {
  const { id, name, variants } = product;
  const addProduct = useCartStore((state: any) => state.addProduct);

  const toggleFavorite = useProductsStore((state: any) => state.toggleFavorite);
  const favouriteProducts = useProductsStore(
    (state: any) => state.favouriteProducts
  );

  const currentProductId = id;
  const currentVariantId = variants[0]?.id;

  const isFavorite = favouriteProducts
    ? favouriteProducts.some(
        (item: any) =>
          item.info.product_id === currentProductId &&
          item.info.variant_id === currentVariantId
      )
    : false;

  return (
    <div className={styles.cardBlock}>
      <FavoriteButton
        isFavorite={isFavorite}
        setIsFavorite={() => {
          if (variants[0]) {
            toggleFavorite({
              product_id: currentProductId,
              variant_id: currentVariantId,
              quantity: 1,
            });
          }
        }}
      />
      <CardLayout id={id} variant={0}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.text}>
              <p className={styles.title}>{name}</p>
              <p className={styles.description}>Яндекс станция</p>
            </div>
            <div className={styles.action}>
              <MediumButton
                title={"Купить"}
                onClick={(e) => {
                  e.preventDefault();
                  if (product && product.variants[0]) {
                    addProduct(product, product.variants[0]);
                    toast.success("Добавлено в корзину");
                  }
                }}
              />
              <p className={styles.price}>{variants[0].price}р.</p>
            </div>
          </div>
          <div className={styles.imgWrapper}>
            <img src={variants[0].photos[0]} className={styles.img} alt="img" />
          </div>
        </div>
      </CardLayout>
    </div>
  );
};
export default ProductCardDetailed;
