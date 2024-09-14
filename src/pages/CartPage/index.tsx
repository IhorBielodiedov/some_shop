import { useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem";
import { TELEGRAM } from "../../utils/constants";
import styles from "./cartPage.module.scss";
import { useEffect } from "react";
import OrderFooter from "../../components/OrderFooter";
import OrderAmount from "../../components/OrderAmount";
import {useCartStore} from "../../stores/cartStore";

const CartPage = () => {
  const navigate = useNavigate();
  const products = useCartStore((state : any) => state.products);
  const totalAmount = useCartStore((state : any) => state.totalAmount);;
  const calculateTotalAmount = useCartStore((state : any) => state.calculateTotalAmount); // Access calculateTotalAmount

  const addProduct = useCartStore((state : any) => state.addProduct);
  const removeProduct = useCartStore((state : any) => state.removeProduct);

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
        <OrderFooter amount={totalAmount ? totalAmount.total - totalAmount.discount : 0} buttonTitle="ОФОРМИТЬ ЗАКАЗ" />
    </div>
  );
};
export default CartPage;
