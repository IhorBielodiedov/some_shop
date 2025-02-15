import { useNavigate } from "react-router-dom";
import Categories from "../../components/Categories";
import ProductList from "../../components/ProductList";
import SearchPanel from "../../components/SearchPanel";
import { TELEGRAM } from "../../utils/constants";
import styles from "./searchPage.module.scss";
import { useEffect, useState } from "react";
import { useProductsStore } from "../../stores/useProductsStore";
import { Product } from "../../utils/types";
import ProductCardDetailed from "../../components/ProductCardDetailed";
import * as api from "../../api";

const SearchPage = () => {
  const categories = useProductsStore((state) => state.categories);
  const products = useProductsStore((state) => state.products);
  const productsLoading = useProductsStore((state) => state.productsLoading);
  const getProducts = useProductsStore((state) => state.getProducts);
  const activeCategory = useProductsStore((state) => state.activeCategory);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [firstProduct, setFirstProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    activeCategory && getProducts(activeCategory.id);
  }, [activeCategory]);

  useEffect(() => {
    if (!productsLoading) {
      const timeout = setTimeout(() => {
        setIsContentVisible(true);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setIsContentVisible(false);
    }
  }, [productsLoading]);

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
    products && setFilteredProducts(products);
    products && setFirstProduct(products[0] || null);
  }, [products]);

  return (
    <div>
      <SearchPanel
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        withFilter
      />
      {categories && <Categories big list={categories} />}
      {productsLoading ? (
        <p>Loading...</p>
      ) : products?.length === 0 ? (
        <p>Здесь ничего нет</p>
      ) : (
        <div
          className={`${styles.content} ${
            !productsLoading && isContentVisible ? styles.fadeIn : ""
          }`}
        >
          {firstProduct && <ProductCardDetailed product={firstProduct} />}
          {products && (
            <div className={styles.lists}>
              <ProductList
                products={products.filter(
                  (item, index) => index !== 0 && index % 2
                )}
              />
              <ProductList
                products={products.filter(
                  (item, index) => index !== 0 && !(index % 2)
                )}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
