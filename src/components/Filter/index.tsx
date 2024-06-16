import LinesSVG from "../../UI/icons/LinesSVG";
import styles from "./filter.module.scss";

const Filter = () => {
  return (
    <button className={styles.button}>
      <LinesSVG />
    </button>
  );
};
export default Filter;
