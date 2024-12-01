import { useState } from "react";
import SearchPanel from "../../components/SearchPanel";
import { useOrderStore } from "../../stores/orderStore";
import CityItem from "../../components/CityItem";
import styles from "./citySearchPage.module.scss";
import { useNavigate } from "react-router-dom";

const CitySearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const client = useOrderStore((state) => state.client);
  const getCities = useOrderStore((state) => state.getCitiesList);
  const cities = useOrderStore((state) => state.providerCities);
  const updateClientProperty = useOrderStore(
    (state) => state.updateClientProperty
  );
  const navigate = useNavigate();

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
