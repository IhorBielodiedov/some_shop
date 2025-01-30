import CardLayout from "../../UI/CardLayout";
import styles from "./productCard.module.scss";
import { Product } from "../../utils/types";
import FavoriteButton from "../../UI/FavoriteButton";
import { useProductsStore } from "../../stores/useProductsStore";
import { useEffect, useState } from "react";
import * as api from "../../api";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { id, name, variants } = product;
  const toggleFavorite = useProductsStore((state: any) => state.toggleFavorite);
  const favouriteProducts = useProductsStore(
    (state: any) => state.favouriteProducts
  );
  const currentProductId = id;
  const currentVariantId = variants[0]?.id; // Ensure variants[0] exists

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

        // Return the image URL
        return imageUrl; // Assuming 'data' contains the image
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
    <>
      <div className={styles.container}>
        <FavoriteButton
          isFavorite={isFavorite}
          setIsFavorite={() => {
            if (variants[0]) {
              toggleFavorite({
                id: currentProductId,
                product_id: currentProductId,
                variant_id: currentVariantId,
                quantity: 1,
              });
            }
          }}
        />
        <CardLayout id={id} variant={0}>
          {photoLoading ? (
            <p className={styles.img}>Loading...</p>
          ) : (
            <img src={photo} alt="product" className={styles.img} />
          )}
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>{variants[0].price}р.</p>
        </CardLayout>
      </div>
    </>
  );
};
export default ProductCard;
