import { useState } from "react";
import { Product } from "../../utils/types";
import styles from "./cartItem.module.scss";
import PlusSVG from "../../UI/icons/PlusSVG";
import MinusSVG from "../../UI/icons/MinusSVG";
import CloseSVG from "../../UI/icons/CloseSVG";

interface Props {
  product: Product;
}

const CartItem = ({ product }: Props) => {
  const [count, setCount] = useState(1);
  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <img src={product.img} alt="product" />
        <div className={styles.info}>
          <div>
            <p className={styles.name}>{product.name}</p>
            <p className={styles.properties}>{product.properties}</p>
            <p className={styles.art}>{product.art}</p>
          </div>
          <div className={styles.count}>
            <button
              className={styles.countButton}
              onClick={() =>
                setCount((state) => {
                  if (state > 1) return state - 1;
                  return state;
                })
              }
            >
              <MinusSVG />
            </button>
            <p>{count}</p>
            <button
              className={styles.countButton}
              onClick={() => setCount((state) => state + 1)}
            >
              <PlusSVG />
            </button>
          </div>
        </div>
      </div>
      <p className={styles.price}>{product.price}р.</p>
      <button className={styles.close}>
        <CloseSVG />
      </button>
    </div>
  );
};
export default CartItem;
