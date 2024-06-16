import { useNavigate } from "react-router-dom";
import Categories from "../../components/Categories";
import ProductCardDetailed from "../../components/ProductCardDetailed";
import ProductList from "../../components/ProductList";
import SearchPanel from "../../components/SearchPanel";
import { CATEGORIES, PRODUCTS, TELEGRAM } from "../../utils/constants";
import styles from "./searchPage.module.scss";
import { useEffect } from "react";

const SearchPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
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
