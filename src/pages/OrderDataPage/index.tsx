import { useNavigate } from "react-router-dom";
import GradientButton from "../../UI/GradientButton";
import { Input } from "../../UI/Input";
import styles from "./orderDataPage.module.scss";
import {useEffect, useState} from "react";
import { TELEGRAM } from "../../utils/constants";

export const OrderDataPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>("+7");
  const [address, setAddress] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isCheckError, setIsCheckError] = useState<boolean>(false);

  const goBack = () => {
    navigate(-1);
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
      <h1 className={styles.title}>Оформление заказа</h1>
      <div className={styles.inputs}>
        <Input title="Имя" value={name} setValue={setName} isCheckError={isCheckError} />
        <Input title="Телефон" value={phone} setValue={setPhone} isCheckError={isCheckError} />
        <Input title="Адрес" value={address} setValue={setAddress} isCheckError={isCheckError}/>
        <Input title="Email" value={email} setValue={setEmail} isCheckError={isCheckError} />
        <div className={styles.agreement}>
          <input
            type="checkbox"
            id="agree"
            name="agree"
            className={styles.checkbox}
          />
          <label htmlFor="agree" className={styles.label}>
            Подписаться на новости, чтобы получать персональные скидки и
            предложения. <a className={styles.link} href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}>Согласие на обработку персональных данных.</a>
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
            if (!name || !phone || !address || !email) setIsCheckError(true);
            else navigate("/payment");
          }}
        />
      </div>
    </div>
  );
};
