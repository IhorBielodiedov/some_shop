import CategoryButton from "../../UI/CategoryButton";
import {useProductsStore} from "../../stores/useProductsStore";
import {Category} from "../../utils/types";

import styles from "./categories.module.scss";

interface Props {
    list: Category[];
    big?: boolean;
    wrap?: boolean;
}

const Categories = ({big = false, list, wrap = false}: Props) => {
    const activeCategory = useProductsStore((state) => state.activeCategory);
    const setActiveCategory = useProductsStore(
        (state) => state.setActiveCategory
    );

    return (
        <>
            <div
                className={styles.container}
                style={{flexWrap: wrap ? "wrap" : "nowrap"}}
            >
                {list.map((item, index) => (
                    <CategoryButton
                        title={item.alias ? item.alias : item.name}
                        key={index}
                        active={activeCategory?.name === item.name}
                        big={big}
                        onClick={() => {
                            setActiveCategory(item);
                        }}
                        doFocus
                    />
                ))}
            </div>
        </>
    );
};
export default Categories;
