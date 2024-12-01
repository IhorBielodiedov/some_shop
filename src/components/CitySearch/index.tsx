import { Link } from "react-router-dom";
import { useOrderStore } from "../../stores/orderStore";
import styles from "./citySearch.module.scss";

const CitySearch = () => {
  const client = useOrderStore((state) => state.client);

  return (
    <Link to="/citySearch" className={styles.container}>
      {client.city ? (
        <button className={styles.button}>
          <p>Город</p>
          <p className={styles.city}>{client.city?.cityName}</p>
        </button>
      ) : (
        <div className={styles.button}>Выберите город</div>
      )}
    </Link>
  );
};

export default CitySearch;
