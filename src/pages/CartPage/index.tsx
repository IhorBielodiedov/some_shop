import { useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem";
import { TELEGRAM } from "../../utils/constants";
import styles from "./cartPage.module.scss";
import { useEffect } from "react";
import OrderFooter from "../../components/OrderFooter";
import OrderAmount from "../../components/OrderAmount";
import {useProductStore} from "../../stores/cartStore";

const CartPage = () => {
  const navigate = useNavigate();
  const products = useProductStore((state : any) => state.products);
  const totalAmount = useProductStore((state : any) => state.totalAmount);;
  const calculateTotalAmount = useProductStore((state : any) => state.calculateTotalAmount); // Access calculateTotalAmount

  const addProduct = useProductStore((state : any) => state.addProduct);
  const removeProduct = useProductStore((state : any) => state.removeProduct);

  useEffect(() => {
    calculateTotalAmount(products);
  }, [products, calculateTotalAmount]);

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
        {products.map((item : any) => (
          <CartItem product={item} />
        ))}
      </div>
      <input className={styles.promo} placeholder="ВВЕДИТЕ ПРОМОКОД" />

        <OrderAmount totalAmount={totalAmount} />
        <OrderFooter amount={totalAmount?.total} buttonTitle="ОФОРМИТЬ ЗАКАЗ" />
    </div>
  );
};
export default CartPage;
