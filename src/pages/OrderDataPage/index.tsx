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
  const getCities = useOrderStore((state) => state.getCitiesList);
  const getPoints = useOrderStore((state) => state.getPointsList);
  const updateClientProperty = useOrderStore(
    (state) => state.updateClientProperty
  );
  const promocode = useOrderStore((state) => state.client.promocode);
  // const points = useOrderStore((state) => state.points);
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getCities("cdek", "RU", "Москва");
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
  const points = {
    rows: [
      {
        id: "521456",
        providerKey: "cse",
        type: 2,
        availableOperation: 2,
        cod: 1,
        paymentCash: null,
        paymentCard: 1,
        name: "Почтомат 5post в Пятерочке OM103327",
        lat: 56.3286537,
        lng: 37.5211701,
        code: "c4b96690-d4cc-11eb-80fe-0090faaaf8e4",
        postIndex: "141804",
        countryCode: "RU",
        region: "Московская",
        regionType: "обл",
        area: null,
        city: "Дмитров",
        cityType: "г",
        cityGuid: "0d8a246f-6446-403e-91c6-3aec9cdbfc32",
        community: null,
        communityType: null,
        communityGuid: null,
        street: "Веретенникова",
        streetType: "ул",
        house: "25",
        address: "141804, обл Московская, г Дмитров, ул Веретенникова, дом 25",
        block: null,
        office: null,
        url: null,
        email: null,
        phone: "88005118800",
        timetable:
          "ПН 08:01 - 23:01,ВТ 08:01 - 23:01,СР 08:01 - 23:01,ЧТ 08:01 - 23:01,ПТ 08:01 - 23:01,СБ 08:01 - 23:01,ВС 08:01 - 23:01",
        worktime: {
          "1": "08:01/23:01",
          "2": "08:01/23:01",
          "3": "08:01/23:01",
          "4": "08:01/23:01",
          "5": "08:01/23:01",
          "6": "08:01/23:01",
          "7": "08:01/23:01",
        },
        photos: null,
        fittingRoom: 0,
        description: null,
        metro: null,
        multiplaceDeliveryAllowed: null,
        extra: [
          {
            key: "ownerCode",
            value: "Почтомат",
          },
        ],
        limits: {
          maxSizeA: null,
          maxSizeB: null,
          maxSizeC: null,
          maxSizeSum: null,
          minWeight: null,
          maxWeight: null,
          maxCod: 100000,
        },
      },
    ],
    meta: {
      total: 1,
      offset: 0,
      limit: 10,
    },
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Получатель</h1>
      <ClientCredentials isCheckError={isCheckError} />
      <div className={styles.content}>
        <h1 className={styles.title}>Населенный пункт</h1>
        <CitySearch />
        <ComponentMap
          data={points.rows}
          indxesVisiblePlacemark={indxesVisiblePlacemark}
          setVisiblePlacemark={setVisiblePlacemark}
        />
        {points?.rows?.map((point) => (
          <p>{point.name}</p>
        ))}
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
