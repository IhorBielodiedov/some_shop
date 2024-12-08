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
import moment from "moment";
export const OrderDataPage = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState<string>("");

  const [isCheckError, setIsCheckError] = useState<boolean>(false);
  const client = useOrderStore((state) => state.client);
  const getPoints = useOrderStore((state) => state.getPointsList);
  const points = useOrderStore((state) => state.points);
  const calculateDeliveryCost = useOrderStore(
    (state) => state.calculateDeliveryCost
  );
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

  useEffect(() => {
    client.point &&
      calculateDeliveryCost({
        to: {
          countryCode: client.point?.countryCode,
          index: client.point?.postIndex,
          addressString: client.point?.address,
          region: client.point?.region,
          city: client.point?.city,
          cityGuid: client.point?.cityGuid,
          lat: client.point?.lat,
          lng: client.point?.lng,
        },
        from: {
          countryCode: "RU",
          index: "105066",
          addressString: "г Москва, ул Нижняя Красносельская, д 35",
          region: "г Москва",
          city: "г Москва",
          cityGuid: "0c5b2444-70a0-4932-980c-b4dc0d3f02b5",
          lat: 55.755318,
          lng: 37.594265,
        },
        places: [
          {
            height: 45,
            length: 30,
            width: 20,
            weight: 20,
          },
        ],
        pickupTypes: [1, 2],
        deliveryTypes: [1, 2],
        assessedCost: 100,
        includeFees: false,
        timeout: 20000,
        skipTariffRules: false,
        tariffIds: [53],
        pointOutId: client.point?.id,
      });
  }, [client.point]);

  const [indxesVisiblePlacemark, setVisiblePlacemark] = useState([]);
  function getDeliveryDates(tariff) {
    if (!tariff) return null;

    const { daysMin, daysMax } = tariff;
    const today = moment();

    // Рассчитываем даты
    const minDate = today.clone().add(daysMin, "days");
    const maxDate = today.clone().add(daysMax, "days");

    // Форматируем даты
    const formattedMinDate = minDate.format("DD.MM");
    const formattedMaxDate = maxDate.format("DD.MM");

    return `${formattedMinDate} - ${formattedMaxDate}`;
  }
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
          <>
            <h1 className={styles.title}>Пункт самовывоза</h1>
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
          </>
        ) : (
          client.city &&
          points.rows.length > 0 &&
          !mapLoadingState && (
            <ComponentMap
              data={points ? points.rows : []}
              indxesVisiblePlacemark={indxesVisiblePlacemark}
              setVisiblePlacemark={setVisiblePlacemark}
              setPoint={updateClientProperty}
              calculateDeliveryCost={calculateDeliveryCost}
            />
          )
        )}
        {client.deliveryCost && (
          <>
            <h1 className={styles.title}>Сроки и стоимость</h1>
            <div className={styles.point}>
              <p>
                {client.deliveryCost.deliveryToPoint[0]?.tariffs[0].tariffName}
              </p>
              <p>
                Срок доставки:{" "}
                {getDeliveryDates(
                  client.deliveryCost.deliveryToPoint[0]?.tariffs[0]
                )}
              </p>
              <p>
                Стоимость:{" "}
                {
                  client.deliveryCost.deliveryToPoint[0]?.tariffs[0]
                    ?.deliveryCost
                }
                ₽
              </p>
            </div>
          </>
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
