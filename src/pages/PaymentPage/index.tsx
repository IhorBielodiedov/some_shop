import GradientButton from "../../UI/GradientButton";
import { Input } from "../../UI/Input";
import { Radio } from "../../UI/Radio";
import styles from "./paymentPage.module.scss";

export const PaymentPage = () => {
  return (
    <div className={styles.container}>
      <h1>Способ оплаты</h1>
      <form>
        <fieldset className={styles.inputs}>
          <Radio title="Имя" />
          <Radio title="Телефон" />
        </fieldset>
      </form>
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
        />
      </div>
    </div>
  );
};
