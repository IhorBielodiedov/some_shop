import { useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem";
import { PRODUCTS, TELEGRAM } from "../../utils/constants";
import styles from "./cartPage.module.scss";
import { useEffect } from "react";
import OrderFooter from "../../components/OrderFooter";
import OrderAmount from "../../components/OrderAmount";

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

        <OrderAmount />
        <OrderFooter buttonTitle="ОФОРМИТЬ ЗАКАЗ" />
    </div>
  );
};
export default CartPage;
