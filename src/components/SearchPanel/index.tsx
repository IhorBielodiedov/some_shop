import Filter from "../Filter";
import SearchBar from "../SearchBar";
import styles from "./searchPanel.module.scss";

interface Props {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

const SearchPanel = ({searchValue, setSearchValue} : Props) => {
  return (
    <div className={styles.container}>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Filter />
    </div>
  );
};

export default SearchPanel;