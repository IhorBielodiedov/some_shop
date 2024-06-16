import Categories from "../../components/Categories";
import ProductCardDetailed from "../../components/ProductCardDetailed";
import ProductList from "../../components/ProductList";
import SearchPanel from "../../components/SearchPanel";
import { CATEGORIES, PRODUCTS } from "../../utils/constants";
import styles from "./searchPage.module.scss";

const SearchPage = () => {
  return (
    <div>
      <SearchPanel />
      <Categories big list={CATEGORIES} />
      <ProductCardDetailed product={PRODUCTS[0]} />
      <div className={styles.lists}>
        <ProductList
          products={PRODUCTS.filter((item, index) => !(index % 2))}
        />
        <ProductList products={PRODUCTS.filter((item, index) => index % 2)} />
      </div>
    </div>
  );
};
export default SearchPage;
