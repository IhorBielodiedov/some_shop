import { useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem";
import { TELEGRAM } from "../../utils/constants";
import styles from "./cartPage.module.scss";
import { useEffect } from "react";
import OrderFooter from "../../components/OrderFooter";
import OrderAmount from "../../components/OrderAmount";
import { useCartStore } from "../../stores/cartStore";
import MediumButton from "../../UI/MediumButton";

const CartPage = () => {
  const navigate = useNavigate();
  const products = useCartStore((state: any) => state.products);
  const totalAmount = useCartStore((state: any) => state.totalAmount);
  const calculateTotalAmount = useCartStore(
    (state: any) => state.calculateTotalAmount
  ); // Access calculateTotalAmount

  const addProduct = useCartStore((state: any) => state.addProduct);
  const removeProduct = useCartStore((state: any) => state.removeProduct);

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
        {products.length === 0 && (
          <div>
            <p>Корзина пока пуста</p>
            <MediumButton
              title="К покупкам"
              onClick={() => navigate("/products")}
            />
          </div>
        )}
        {products.map((item: any) => (
          <CartItem product={item} />
        ))}
      </div>
      {products.length !== 0 && (
        <input className={styles.promo} placeholder="ВВЕДИТЕ ПРОМОКОД" />
      )}

      {products.length !== 0 && <OrderAmount totalAmount={totalAmount} />}
      {products.length !== 0 && (
        <OrderFooter
          amount={totalAmount ? totalAmount.total - totalAmount.discount : 0}
          buttonTitle="ОФОРМИТЬ ЗАКАЗ"
        />
      )}
    </div>
  );
};
export default CartPage;
