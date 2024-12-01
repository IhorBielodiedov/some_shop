import { Link, useNavigate } from "react-router-dom";
import GradientButton from "../../UI/GradientButton";
import { Input } from "../../UI/Input";
import styles from "./orderDataPage.module.scss";
import { useEffect, useState } from "react";
import { TELEGRAM } from "../../utils/constants";
import { useOrderStore } from "../../stores/orderStore";
import PaymentMethodsPanel from "../../components/PaymentMethodsPanel";
import ClientCredentials from "../../components/ClientCredentials";
import CitySearch from "../../components/CitySearch";
import { YMapZoomControl } from "@yandex/ymaps3-default-ui-theme";
import {
  YMap,
  YMapControls,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
} from "../../lib/ymaps";
import { YMapLocationRequest } from "@yandex/ymaps3-types";

export const OrderDataPage = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState<string>("");

  const [isCheckError, setIsCheckError] = useState<boolean>(false);
  const client = useOrderStore((state) => state.client);
  const getCities = useOrderStore((state) => state.getCitiesList);
  const updateClientProperty = useOrderStore(
    (state) => state.updateClientProperty
  );
  const promocode = useOrderStore((state) => state.client.promocode);

  const goBack = () => {
    navigate(-1);
  };

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

  const LOCATION: YMapLocationRequest = {
    center: [37.53, 55.703], // starting position [lng, lat]
    zoom: 17, // starting zoom
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Получатель</h1>
      <ClientCredentials isCheckError={isCheckError} />
      <div className={styles.content}>
        <h1 className={styles.title}>Населенный пункт</h1>
        <CitySearch />
        <YMap location={LOCATION} showScaleInCopyrights={true}>
          <YMapDefaultSchemeLayer />
          <YMapDefaultFeaturesLayer />

          <YMapControls position="right">
            <YMapZoomControl />
          </YMapControls>
        </YMap>
        <h1 className={styles.title}>Оплата</h1>
        <PaymentMethodsPanel />
        <h1 className={styles.title}>Промокод</h1>
        <input
          className={styles.promo}
          placeholder="ВВЕДИТЕ ПРОМОКОД"
          value={promocode}
          onChange={(e) => updateClientProperty("promocode", e.target.value)}
        />
        <h1 className={styles.title}>Комментарии к заказу</h1>
        <Input
          title="Напишите комментарий"
          value={comment}
          setValue={setComment}
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
            <a className={styles.link} href={"/userAgreement"}>
              Согласие на обработку персональных данных.
            </a>
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
            if (
              !client.firstName ||
              !client.lastName ||
              !client.phone ||
              !client.city ||
              !client.email
            )
              setIsCheckError(true);
            else navigate("/payment");
          }}
        />
      </div>
    </div>
  );
};
