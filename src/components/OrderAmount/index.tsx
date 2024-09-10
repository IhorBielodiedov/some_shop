import styles from "./orderAmount.module.scss";
import {formatNumberWithSpaces} from "../../utils/helper";

interface Props {
    totalAmount: { total: number; discount: number } | undefined;
}

const OrderAmount = ({totalAmount} : Props) => {
  return (
      <>
          <p className={styles.subtitle}>Сумма заказа</p>
          <div className={styles.priceContainer}>
              <div className={styles.total}>
                  <p className={styles.priceTitle}>Стоимость товаров</p>
                  <div className={styles.line}/>
                  <p className={styles.price}>{formatNumberWithSpaces(totalAmount ? totalAmount.total : 0)}р.</p>
              </div>
              <div className={styles.total}>
                  <p className={`${styles.priceTitle} ${styles.light}`}>Скидка</p>
                  <div className={styles.line}/>
                  <p className={`${styles.price} ${styles.light}`}>-{formatNumberWithSpaces(totalAmount ? totalAmount.discount : 0)}р.</p>
              </div>
          </div>
          <p className={styles.totalPrice}>Итого: {formatNumberWithSpaces(totalAmount ? totalAmount.total - totalAmount.discount : 0)}р.</p>
      </>
  );
};

export default OrderAmount;
