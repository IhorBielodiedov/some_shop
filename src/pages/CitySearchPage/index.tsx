import { useEffect, useState } from "react";
import SearchPanel from "../../components/SearchPanel";
import { useOrderStore } from "../../stores/orderStore";
import CityItem from "../../components/CityItem";
import styles from "./citySearchPage.module.scss";
import { useNavigate } from "react-router-dom";
import { TELEGRAM } from "../../utils/constants";

const CitySearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const cities = useOrderStore((state) => state.providerCities);
  const updateClientProperty = useOrderStore(
    (state) => state.updateClientProperty
  );
  const navigate = useNavigate();

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
      <SearchPanel setSearchValue={setSearchValue} searchValue={searchValue} />
      <div className={styles.items}>
        {cities?.rows.map((city) => (
          <CityItem
            city={city}
            onClick={() => {
              updateClientProperty("city", city);
              navigate("/orderData");
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default CitySearchPage;
