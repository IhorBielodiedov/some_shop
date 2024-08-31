import GradientButton from "../../UI/GradientButton";
import { Input } from "../../UI/Input";
import { Radio } from "../../UI/Radio";
import styles from "./paymentPage.module.scss";
import OrderFooter from "../../components/OrderFooter";
import OrderAmount from "../../components/OrderAmount";
import {useState} from "react";

export const PaymentPage = () => {
    const [selectedOption, setSelectedOption] = useState("При получении");

    const handleOptionChange = (value : string) => {
        setSelectedOption(value);
    };

  return (
    <div className={styles.container}>
      <h1>Способ оплаты</h1>
      <form className={styles.form}>
        <fieldset className={styles.inputs}>
          <Radio title="По QR-коду" handleOptionChange={handleOptionChange} selectedOption={selectedOption} />
          <Radio title="При получении" description={'наличными, картой'} handleOptionChange={handleOptionChange} selectedOption={selectedOption} />
        </fieldset>
      </form>
        <OrderAmount />

        <div className={styles.delivery}>
            Ориентировочное время доставки от 5 до 10 рабочих дней
        </div>

        <OrderFooter buttonTitle="ПРОДОЛЖИТЬ" />
    </div>
  );
};
