import { useNavigate } from "react-router-dom";
import Categories from "../../components/Categories";
import ProductCardDetailed from "../../components/ProductCardDetailed";
import ProductList from "../../components/ProductList";
import SearchPanel from "../../components/SearchPanel";
import { CATEGORIES, PRODUCTS, TELEGRAM } from "../../utils/constants";
import styles from "./searchPage.module.scss";
import { useEffect, useState } from "react";
import alise2 from "../../assets/img/alise2.png";
import { useProductsStore } from "../../stores/useProductsStore";

const SearchPage = () => {
  const activeCategory = useProductsStore((state) => state.activeCategory);
  const [products, setProducts] = useState(
    PRODUCTS.filter((item) => {
      if (
        activeCategory &&
        activeCategory.id !== null &&
        activeCategory.id !== undefined &&
        activeCategory.id !== 0
      ) {
        return activeCategory.id === item.category_id;
      }
      return true;
    })
  );

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
  useEffect(() => {
    setProducts(
      PRODUCTS.filter((item) => {
        if (
          activeCategory &&
          activeCategory.id !== null &&
          activeCategory.id !== undefined &&
          activeCategory.id !== 0
        ) {
          return activeCategory.id === item.category_id;
        }
        return true;
      })
    );
  }, [activeCategory]);
  return (
    <div>
      <SearchPanel />
      <Categories big list={CATEGORIES} />
      {/* <ProductCardDetailed product={products[0]} /> */}
      <div className={styles.lists}>
        <ProductList
          products={products.filter((item, index) => !(index % 2))}
        />
        <ProductList products={products.filter((item, index) => index % 2)} />
      </div>
    </div>
  );
};
export default SearchPage;
