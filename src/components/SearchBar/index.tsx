import SearchSVG from "../../UI/icons/SearchSVG";
import styles from "./searchBar.module.scss";

const SearchBar = () => {
  return (
    <label className={styles.label}>
      <div className={styles.icon}>
        <SearchSVG />
      </div>
      <input className={styles.input} placeholder="Поиск" />
    </label>
  );
};
export default SearchBar;
