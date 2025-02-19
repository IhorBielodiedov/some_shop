import styles from "./cartItem.module.scss";
import PlusSVG from "../../UI/icons/PlusSVG";
import MinusSVG from "../../UI/icons/MinusSVG";
import CloseSVG from "../../UI/icons/CloseSVG";
import { useCartStore } from "../../stores/cartStore";
import { formatNumberWithSpaces } from "../../utils/helper";
import React from "react";
import { CartProduct } from "../../stores/cartStore/types";
import { USER } from "../../utils/constants";
interface Props {
  product: CartProduct;
}

const CartItem = React.memo(({ product }: Props) => {
  const removeProduct = useCartStore((state) => state.removeProduct);
  const updateProductCount = useCartStore((state) => state.updateProductCount);

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
        <img
          className={styles.img}
          src={product.variant.photos[0]}
          alt={product.name}
        />
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
