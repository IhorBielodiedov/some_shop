import { ProviderCity } from "../../utils/types";
import styles from "./cityItem.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  city: ProviderCity;
}
const CityItem = ({ city, ...args }: Props) => {
  const { cityName, oblName } = city;
  return (
    <button className={styles.container} {...args}>
      <p className={styles.title}>
        {cityName}, {oblName}
      </p>
    </button>
  );
};

export default CityItem;
