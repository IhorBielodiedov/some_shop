import styles from "./cartItem.module.scss";
import PlusSVG from "../../UI/icons/PlusSVG";
import MinusSVG from "../../UI/icons/MinusSVG";
import CloseSVG from "../../UI/icons/CloseSVG";
import { useCartStore } from "../../stores/cartStore";
import { formatNumberWithSpaces } from "../../utils/helper";
import React, { useEffect, useState } from "react";
import { CartProduct } from "../../stores/cartStore/types";
import * as api from "../../api";
import LoaderSVG from "../../UI/icons/LoaderSVG";
import { USER } from "../../utils/constants";
interface Props {
  product: CartProduct;
}

const CartItem = React.memo(({ product }: Props) => {
  const removeProduct = useCartStore((state) => state.removeProduct);
  const updateProductCount = useCartStore((state) => state.updateProductCount);
  const [photo, setPhoto] = useState<string | undefined>(undefined);
  const [photoLoading, setPhotoLoading] = useState(false);

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
      const fetchedPhoto = await getPhotoF(product.variant.photos[0]);
      setPhoto(fetchedPhoto);
      setPhotoLoading(false);
    };

    product && fetchPhoto(); // Call the function to fetch the photo
  }, [product.variant.photos[0]]);

  const handleDelete = () => {
    removeProduct(product);
  };

  const handleCountChange = (
    product: CartProduct,
    variantId: number,
    newCount: number
  ) => {
    if (newCount < 1) return;
    updateProductCount(product, variantId, newCount, USER.id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        {photoLoading ? (
          <div className={styles.img}>
            <LoaderSVG />
          </div>
        ) : (
          <img className={styles.img} src={photo} alt={product.name} />
        )}
        <div className={styles.info}>
          <div>
            <p className={styles.name}>{product.name}</p>
            <p className={styles.properties}>{product.variant.color}</p>
            <p className={styles.art}>арт. {product.id}</p>
          </div>
          <div className={styles.count}>
            <button
              className={styles.countButton}
              onClick={() => {
                if (product.count === 1) {
                  handleDelete();
                }
                handleCountChange(
                  product,
                  product.variant.id,
                  product.count - 1
                );
              }}
            >
              <MinusSVG />
            </button>
            <p>{product.count}</p>
            <button
              className={styles.countButton}
              onClick={() =>
                handleCountChange(
                  product,
                  product.variant.id,
                  product.count + 1
                )
              }
            >
              <PlusSVG />
            </button>
          </div>
        </div>
      </div>
      <div>
        {product.discount && (
          <p className={styles.sale}>
            {formatNumberWithSpaces(
              (product.variant.price + product.discount) * product.count
            )}
            р.
          </p>
        )}
        <p className={styles.price}>
          {formatNumberWithSpaces(product.variant.price * product.count)}р.
        </p>
      </div>
      <button className={styles.close} onClick={handleDelete}>
        <CloseSVG color={"var(--main-button-color)"} />
      </button>
    </div>
  );
});

export default CartItem;
