import { useNavigate } from "react-router-dom";
import GradientButton from "../../UI/GradientButton";
import { Input } from "../../UI/Input";
import styles from "./orderDataPage.module.scss";

export const OrderDataPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1>Оформление заказа</h1>
      <div className={styles.inputs}>
        <Input title="Имя" />
        <Input title="Телефон" />
        <Input title="Адрес" />
        <Input title="Email" />
        <div className={styles.agreement}>
          <input
            type="checkbox"
            id="agree"
            name="agree"
            className={styles.checkbox}
          />
          <label htmlFor="agree" className={styles.label}>
            Подписаться на новости, чтобы получать персональные скидки и
            предложения. <span>Согласие на обработку персональных данных.</span>
          </label>
        </div>
      </div>
      <div className={styles.footer}>
        <GradientButton
          title="ПРОДОЛЖИТЬ"
          titleSize={15}
          height={49}
          titleAlign="center"
          paddingTop={15}
          paddingBottom={15}
          gradientDirection="diagonal-right"
          borderRadius={13}
          onClick={() => {
            navigate("/payment");
          }}
        />
      </div>
    </div>
  );
};
