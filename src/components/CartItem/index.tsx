import {Product} from "../../utils/types";
import styles from "./cartItem.module.scss";
import PlusSVG from "../../UI/icons/PlusSVG";
import MinusSVG from "../../UI/icons/MinusSVG";
import CloseSVG from "../../UI/icons/CloseSVG";
import station from "../../assets/img/station.png";
import {useProductStore} from "../../stores/cartStore";
import {formatNumberWithSpaces} from "../../utils/helper";

interface Props {
    product: Product | any;
}

const CartItem = ({product}: Props) => {
    const removeProduct = useProductStore((state: any) => state.removeProduct);
    const updateProductCount = useProductStore((state: any) => state.updateProductCount);

    const handleDelete = () => {
        removeProduct(product.id);
    };

    const handleCountChange = (productId: number, newCount: number) => {
        if (newCount < 1) return;
        updateProductCount(productId, newCount);
    };


    return (
        <div className={styles.container}>
            <div className={styles.product}>
                <img src={Array.isArray(product.variants[0].photos) ? product.variants[0].photos[0] : product.variants[0].photos} alt="product"/>
                <div className={styles.info}>
                    <div>
                        <p className={styles.name}>{product.name}</p>
                        <p className={styles.properties}>{product.description}</p>
                        <p className={styles.art}>арт. {product.id}</p>
                    </div>
                    <div className={styles.count}>
                        <button
                            className={styles.countButton}
                            onClick={() => handleCountChange(product.id, product.count - 1)}
                        >
                            <MinusSVG/>
                        </button>
                        <p>{product.count}</p>
                        <button
                            className={styles.countButton}
                            onClick={() => handleCountChange(product.id, product.count + 1)}
                        >
                            <PlusSVG/>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <p className={styles.sale}>{formatNumberWithSpaces((product.discount + product.variants[0].price) * product.count)}р.
                </p>
                <p className={styles.price}>{formatNumberWithSpaces((product.variants[0].price) * product.count)}р.</p>
            </div>
            <button className={styles.close} onClick={handleDelete}>
                <CloseSVG color={"var(--main-button-color)"}/>
            </button>
        </div>
    );
};
export default CartItem;
