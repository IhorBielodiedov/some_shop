import {useNavigate} from "react-router-dom";
import Categories from "../../components/Categories";
import ProductList from "../../components/ProductList";
import SearchPanel from "../../components/SearchPanel";
import {CATEGORIES, PRODUCTS, TELEGRAM} from "../../utils/constants";
import styles from "./searchPage.module.scss";
import {useEffect, useState} from "react";
import {useProductsStore} from "../../stores/useProductsStore";
import {Product} from "../../utils/types";
import ProductCardDetailed from "../../components/ProductCardDetailed";

const SearchPage = () => {
    const activeCategory = useProductsStore((state) => state.activeCategory);
    const [isLoading, setIsLoading] = useState(false);
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const [products, setProducts] = useState(
        PRODUCTS.filter((item, index) => {
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
    const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

    const [firstProduct, setFirstProduct] = useState<Product | null>(null);
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        if (!isLoading) {
            const timeout = setTimeout(() => {
                setIsContentVisible(true);
            }, 50);
            return () => clearTimeout(timeout);
        } else {
            setIsContentVisible(false);
        }
    }, [isLoading]);

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
        setFirstProduct(products[0]);
    }, [products]);


    useEffect(() => {
        setIsLoading(true);

        const filtered = products.filter((item) => {
            const matchesCategory = activeCategory && activeCategory.id
                ? item.category_id === activeCategory.id
                : true;

            const matchesSearch = searchValue
                ? item.name.toLowerCase().includes(searchValue.toLowerCase())
                : true;

            return matchesCategory && matchesSearch;
        });

        setFilteredProducts(filtered);
        setFirstProduct(filtered[0]);

        setTimeout(() => {
            setIsLoading(false);
        }, Math.floor(Math.random() * (500 - 300 + 1)) + 300);
    }, [activeCategory, searchValue, products]);

    return (
        <div>
            <SearchPanel setSearchValue={setSearchValue} searchValue={searchValue} />
            <Categories big list={CATEGORIES} />
            {isLoading ? <p>Loading...</p> :
                <div className={`${styles.content} ${!isLoading && isContentVisible ? styles.fadeIn : ''}`}>
                    {firstProduct && <ProductCardDetailed product={firstProduct}/>}
                    <div className={styles.lists}>
                        <ProductList
                            products={filteredProducts.filter((item, index) => index !== 0 && index % 2)}
                        />
                        <ProductList
                            products={filteredProducts.filter((item, index) => index !== 0 && !(index % 2))}
                        />
                    </div>
                </div>
            }
        </div>
    );
};
export default SearchPage;
