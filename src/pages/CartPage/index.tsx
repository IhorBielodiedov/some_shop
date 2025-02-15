/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem";
import { TELEGRAM } from "../../utils/constants";
import styles from "./cartPage.module.scss";
import { useEffect, useState } from "react";
import OrderFooter from "../../components/OrderFooter";
import OrderAmount from "../../components/OrderAmount";
import { useCartStore } from "../../stores/cartStore";
import MediumButton from "../../UI/MediumButton";

const CartPage = () => {
  const navigate = useNavigate();
  const products = useCartStore((state) => state.products);
  const productsLoading = useCartStore((state) => state.productsLoading);
  const totalAmount = useCartStore((state) => state.totalAmount);
  const getCarts = useCartStore((state) => state.getCarts);
  const [promocode, setPromocode] = useState("");
  const promocodeFinal = useCartStore((state) => state.promocode);
  const getPromocode = useCartStore((state) => state.getPromocode);
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

  useEffect(() => {
    getCarts();
  }, []);
  return (
    <div>
      {productsLoading ? (
        <p>Loading...</p>
      ) : (
        <>
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
            {products.map((product) => (
              <CartItem
                product={product}
                key={`${product.id}${product.variant.id}`}
              />
            ))}
          </div>
          {products.length !== 0 && (
            <>
              <input
                className={styles.promo}
                placeholder="ВВЕДИТЕ ПРОМОКОД"
                value={promocode}
                onChange={(e) => {
                  setPromocode(e.target.value);
                }}
              />
              <MediumButton
                title="Применить"
                onClick={() => getPromocode(promocode)}
              />
            </>
          )}

          {products.length !== 0 && <OrderAmount totalAmount={totalAmount} />}
          {products.length !== 0 && (
            <OrderFooter
              amount={
                totalAmount ? totalAmount.total - totalAmount.discount : 0
              }
              buttonTitle="ОФОРМИТЬ ЗАКАЗ"
            />
          )}
        </>
      )}
    </div>
  );
};
export default CartPage;
