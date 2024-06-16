import Filter from "../Filter";
import SearchBar from "../SearchBar";
import styles from "./searchPanel.module.scss";

const SearchPanel = () => {
  return (
    <div className={styles.container}>
      <SearchBar />
      <Filter />
    </div>
  );
};
export default SearchPanel;
