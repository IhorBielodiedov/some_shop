import { useNavigate } from "react-router-dom";
import GradientButton from "../../UI/GradientButton";
import { Input } from "../../UI/Input";
import styles from "./orderDataPage.module.scss";
import { useEffect, useState } from "react";
import { TELEGRAM } from "../../utils/constants";
import { Radio } from "../../UI/Radio";
import { useOrderStore } from "../../stores/orderStore";
import CityItem from "../../components/CityItem";
import { type YMapLocationRequest } from "ymaps3";
import { YMap, YMapDefaultSchemeLayer } from "../../lib/ymaps";

export const OrderDataPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("+7");
  const [address, setAddress] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const [isCheckError, setIsCheckError] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState("Онлайн");
  const client = useOrderStore((state) => state.client);
  const getCities = useOrderStore((state) => state.getCitiesList);
  const cities = useOrderStore((state) => state.providerCities);
  const setCity = useOrderStore((state) => state.setCity);
  const goBack = () => {
    navigate(-1);
  };

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const LOCATION: YMapLocationRequest = {
    center: [39.7112, 43.5797], // starting position [lng, lat]
    zoom: 14.5, // starting zoom
  };

  // @ts-ignore
  window.map = null;
  let map;

  useEffect(() => {
    getCities("cdek", "RU", "Мос");
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
      <h1 className={styles.title}>Получатель</h1>
      <div className={styles.inputs}>
        <Input
          title="Имя"
          value={name}
          setValue={setName}
          isCheckError={isCheckError}
        />
        <Input
          title="Телефон"
          value={phone}
          setValue={setPhone}
          isCheckError={isCheckError}
        />
        <Input
          title="Адрес"
          value={address}
          setValue={setAddress}
          isCheckError={isCheckError}
        />
        <Input
          title="Email"
          value={email}
          setValue={setEmail}
          isCheckError={isCheckError}
        />
        <div className={styles.agreement}>
          <input
            type="checkbox"
            id="agree"
            name="agree"
            className={styles.checkbox}
          />
          <label htmlFor="agree" className={styles.label}>
            Подписаться на новости, чтобы получать персональные скидки и
            предложения.{" "}
            <a
              className={styles.link}
              href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
            >
              Согласие на обработку персональных данных.
            </a>
          </label>
        </div>
        <h1 className={styles.title}>Населенный пункт</h1>

        <p>
          {client.city?.cityName}, {client.city?.oblName}
        </p>

        {cities?.rows.map((city) => (
          <CityItem city={city} onClick={() => setCity(city)} />
        ))}
        <h1 className={styles.title}>Оплата</h1>
        <Radio
          title="Онлайн"
          description={"Оплата картой онлайн"}
          handleOptionChange={handleOptionChange}
          selectedOption={selectedOption}
        />
        <div style={{ height: "250px" }}>
          <YMap
            location={LOCATION}
            showScaleInCopyrights={true}
            ref={(x) => (map = x)}
          >
            {/* Add a map scheme layer */}
            <YMapDefaultSchemeLayer />
          </YMap>
        </div>
        <h1 className={styles.title}>Промокод</h1>
        <input className={styles.promo} placeholder="ВВЕДИТЕ ПРОМОКОД" />
        <h1 className={styles.title}>Комментарии к заказу</h1>
        <Input
          title="Напишите комментарий"
          value={comment}
          setValue={setComment}
          isCheckError={isCheckError}
        />
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
