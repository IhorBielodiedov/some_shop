import styles from "./orgerFooter.module.scss";

const OrderAmount = () => {
  return (
      <>
          <p className={styles.subtitle}>Сумма заказа</p>
          <div className={styles.priceContainer}>
              <div className={styles.total}>
                  <p className={styles.priceTitle}>стоимость товаров</p>
                  <div className={styles.line}/>
                  <p className={styles.price}>40 497р.</p>
              </div>
              <div className={styles.total}>
                  <p className={`${styles.priceTitle} ${styles.light}`}>скидка</p>
                  <div className={styles.line}/>
                  <p className={`${styles.price} ${styles.light}`}>- 13 000р.</p>
              </div>
          </div>
          <p className={styles.totalPrice}>Итого: 10 000р.</p>
      </>
  );
};

export default OrderAmount;
