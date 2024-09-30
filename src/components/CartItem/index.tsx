import { Product } from "../../utils/types";
import styles from "./cartItem.module.scss";
import PlusSVG from "../../UI/icons/PlusSVG";
import MinusSVG from "../../UI/icons/MinusSVG";
import CloseSVG from "../../UI/icons/CloseSVG";
import { useCartStore } from "../../stores/cartStore";
import { formatNumberWithSpaces } from "../../utils/helper";

interface Props {
    product: Product & {
        variant: any;
        count: number;
        discount?: number;
    };
}

const CartItem = ({ product }: Props) => {
    const removeProduct = useCartStore((state: any) => state.removeProduct);
    const updateProductCount = useCartStore((state: any) => state.updateProductCount);

    const handleDelete = () => {
        removeProduct(product.id, product.variant.id);
    };

    const handleCountChange = (productId: number, variantId: number, newCount: number) => {
        if (newCount < 1) return;
        updateProductCount(productId, variantId, newCount);
    };

    return (
        <div className={styles.container}>
            <div className={styles.product}>
                <img
                    src={product.variant.photos[0]}
                    alt="product"
                />
                <div className={styles.info}>
                    <div>
                        <p className={styles.name}>{product.name}</p>
                        <p className={styles.properties}>{product.variant.color}</p>
                        <p className={styles.art}>арт. {product.id}</p>
                    </div>
                    <div className={styles.count}>
                        <button
                            className={styles.countButton}
                            onClick={() => handleCountChange(product.id, product.variant.id, product.count - 1)}
                        >
                            <MinusSVG />
                        </button>
                        <p>{product.count}</p>
                        <button
                            className={styles.countButton}
                            onClick={() => handleCountChange(product.id, product.variant.id, product.count + 1)}
                        >
                            <PlusSVG />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {product.discount !== 0 && (
                    <p className={styles.sale}>
                        {formatNumberWithSpaces((product.variant.price + product.discount) * product.count)}р.
                    </p>
                )}
                <p className={styles.price}>
                    {formatNumberWithSpaces(product.variant.price * product.count)}р.
                </p>
            </div>
            <button className={styles.close} onClick={handleDelete}>
                <CloseSVG color={"var(--main-button-color)"} />
            </button>
        </div>
    );
};

export default CartItem;