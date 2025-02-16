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
import { USER } from "../../utils/constants";

interface Props {
  product: Product;
}

const ProductCardDetailed = ({ product }: Props) => {
  const { id, name, variants } = product;
  const addProduct = useCartStore((state) => state.addProduct);

  const toggleFavorite = useProductsStore((state) => state.toggleFavorite);
  const favouriteProducts = useProductsStore(
    (state: any) => state.favouriteProducts
  );

  const currentProductId = id;
  const currentVariantId = variants[0]?.id;

  const [isFavorite, setIsFavorite] = useState(product.variants[0].in_favorite);

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
        setIsFavorite={async () => {
          if (product && product.variants[0]) {
            if (product.variants[0]?.in_favorite) {
              await api.deleteFavorite(product.variants[0]?.id, 1);
              toggleFavorite(product, false, 0);
              setIsFavorite(false);
            } else {
              await api.createFavorite(product.variants[0]?.id, 1);
              toggleFavorite(product, true, 0);
              setIsFavorite(true);
            }
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
                    addProduct(product, product.variants[0], USER.id);
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
