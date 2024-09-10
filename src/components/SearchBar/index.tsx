import SearchSVG from "../../UI/icons/SearchSVG";
import styles from "./searchBar.module.scss";
import React from "react";

interface Props {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

const SearchBar = ({searchValue, setSearchValue} : Props) => {
  return (
    <label className={styles.label}>
      <div className={styles.icon}>
        <SearchSVG />
      </div>
      <input className={styles.input}
             placeholder="Поиск"
             value={searchValue}
             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}/>
    </label>
  );
};
export default SearchBar;
