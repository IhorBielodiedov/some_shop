import { useNavigate } from "react-router-dom";
import GradientButton from "../../UI/GradientButton";
import { Input } from "../../UI/Input";
import styles from "./orderDataPage.module.scss";
import { useEffect, useState } from "react";
import { TELEGRAM } from "../../utils/constants";
import { useOrderStore } from "../../stores/orderStore";
import PaymentMethodsPanel from "../../components/PaymentMethodsPanel";
import ClientCredentials from "../../components/ClientCredentials";
import CitySearch from "../../components/CitySearch";
import ComponentMap from "../../components/ComponentMap";
export const OrderDataPage = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState<string>("");

  const [isCheckError, setIsCheckError] = useState<boolean>(false);
  const client = useOrderStore((state) => state.client);
  const getPoints = useOrderStore((state) => state.getPointsList);
  const points = useOrderStore((state) => state.points);
  const updateClientProperty = useOrderStore(
    (state) => state.updateClientProperty
  );
  const promocode = useOrderStore((state) => state.client.promocode);
  const mapLoadingState = useOrderStore(
    (state) => state.loadingStates.mapLoadingState
  );
  // const points = useOrderStore((state) => state.points);
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getPoints(client.city?.cityName);
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

  const [indxesVisiblePlacemark, setVisiblePlacemark] = useState([]);

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Получатель</h1>
        <ClientCredentials isCheckError={isCheckError} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Населенный пункт</h1>
        <CitySearch />
        {client.point ? (
          <div className={styles.point}>
            <p className={styles.pointName}>{client.point.name}</p>
            <p className={styles.pointAddress}>{client.point.address}</p>
            <p className={styles.pointTimetable}>{client.point.timetable}</p>
            <button
              className={styles.pointButton}
              onClick={() => updateClientProperty("point", null)}
            >
              Выбрать другой
            </button>
          </div>
        ) : (
          client.city &&
          points.rows.length > 0 &&
          !mapLoadingState && (
            <ComponentMap
              data={points ? points.rows : []}
              indxesVisiblePlacemark={indxesVisiblePlacemark}
              setVisiblePlacemark={setVisiblePlacemark}
              setPoint={updateClientProperty}
            />
          )
        )}
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
