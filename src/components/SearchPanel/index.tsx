import Filter from "../Filter";
import SearchBar from "../SearchBar";
import styles from "./searchPanel.module.scss";

interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
  withFilter?: boolean;
}

const SearchPanel = ({
  searchValue,
  setSearchValue,
  withFilter = false,
}: Props) => {
  return (
    <div className={styles.container}>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      {withFilter && <Filter />}
    </div>
  );
};

export default SearchPanel;
