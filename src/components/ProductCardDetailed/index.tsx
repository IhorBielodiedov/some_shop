import CardLayout from "../../UI/CardLayout";
import styles from "./productCardDetailed.module.scss";
import { Product } from "../../utils/types";
import MediumButton from "../../UI/MediumButton";
import FavoriteButton from "../../UI/FavoriteButton";
import { useEffect, useState } from "react";
import { useCartStore } from "../../stores/cartStore";
import { useProductsStore } from "../../stores/useProductsStore";
import { toast } from "react-toastify";
import * as api from "../../api";

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

  const [photo, setPhoto] = useState<string | undefined>(undefined);
  const [photoLoading, setPhotoLoading] = useState(true);

  useEffect(() => {
    const getPhotoF = async (img: string) => {
      try {
        setPhotoLoading(true);
        const response = await api.getPhoto(img);

        // Create an object URL from the Blob
        const imageUrl = URL.createObjectURL(response.data);

        return imageUrl;
      } catch (error) {
        console.error("Error fetching photo:", error);
        return undefined;
      }
    };

    const fetchPhoto = async () => {
      const fetchedPhoto = await getPhotoF(variants[0].photos[0]); // Wait for the photo to be fetched
      setPhoto(fetchedPhoto);
      setPhotoLoading(false);
    };

    product && fetchPhoto(); // Call the function to fetch the photo
  }, [product]);

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
            {photoLoading ? (
              <p className={styles.img}>Loading...</p>
            ) : (
              <img src={photo} className={styles.img} alt="img" />
            )}
          </div>
        </div>
      </CardLayout>
    </div>
  );
};
export default ProductCardDetailed;
