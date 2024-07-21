import { useNavigate } from "react-router-dom";
import GradientButton from "../../UI/GradientButton";
import CartItem from "../../components/CartItem";
import { PRODUCTS, TELEGRAM } from "../../utils/constants";
import styles from "./cartPage.module.scss";
import { useEffect } from "react";

const CartPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    if (window.history.length > 1) {
      TELEGRAM.BackButton.show();
      TELEGRAM.BackButton.onClick(goBack);
    } else {
      TELEGRAM.BackButton.hide();
    }
    return () => {
      TELEGRAM.BackButton.offClick(goBack);
    };
  }, []);
  return (
    <div>
      <div className={styles.items}>
        {PRODUCTS.map((item) => (
          <CartItem product={item} />
        ))}
      </div>
      <input className={styles.promo} placeholder="ВВЕДИТЕ ПРОМОКОД" />
      <p className={styles.subtitle}>Сумма заказа</p>
      <div className={styles.priceContainer}>
        <div className={styles.total}>
          <p className={styles.priceTitle}>стоимость товаров</p>
          <div className={styles.line} />
          <p className={styles.price}>40 497р.</p>
        </div>
        <div className={styles.total}>
          <p className={`${styles.priceTitle} ${styles.light}`}>скидка</p>
          <div className={styles.line} />
          <p className={`${styles.price} ${styles.light}`}>- 13 000р.</p>
        </div>
      </div>
      <p className={styles.totalPrice}>Итого: 10 000р.</p>
      <div className={styles.buyButton}>
        <GradientButton
          title="ОФОРМИТЬ ЗАКАЗ"
          titleSize={15}
          height={49}
          titleAlign="center"
          paddingTop={15}
          paddingBottom={16}
          gradientDirection="diagonal-left"
          img={""}
        />
      </div>
    </div>
  );
};
export default CartPage;
