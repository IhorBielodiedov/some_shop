import GradientButton from "../../UI/GradientButton";
import { Input } from "../../UI/Input";
import { Radio } from "../../UI/Radio";
import styles from "./paymentPage.module.scss";
import OrderFooter from "../../components/OrderFooter";
import OrderAmount from "../../components/OrderAmount";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TELEGRAM } from "../../utils/constants";
import {useProductStore} from "../../stores/cartStore";

export const PaymentPage = () => {
  const [selectedOption, setSelectedOption] = useState("При получении");
  const totalAmount = useProductStore((state : any) => state.totalAmount);;

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };
  useEffect(() => {
    window.scrollTo({ top: 0 });
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
    <div className={styles.container}>
      <h1 className={styles.title}>Способ оплаты</h1>
      <form className={styles.form}>
        <fieldset className={styles.inputs}>
          <Radio
            title="По QR-коду"
            handleOptionChange={handleOptionChange}
            selectedOption={selectedOption}
          />
          <Radio
            title="При получении"
            description={"наличными, картой"}
            handleOptionChange={handleOptionChange}
            selectedOption={selectedOption}
          />
        </fieldset>
      </form>
      <OrderAmount totalAmount={totalAmount} />

      <div className={styles.delivery}>
        Ориентировочное время доставки от 5 до 10 рабочих дней
      </div>

      <OrderFooter amount={totalAmount?.total} buttonTitle="ПРОДОЛЖИТЬ" />
    </div>
  );
};
