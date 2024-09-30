import CardLayout from "../../UI/CardLayout";
import styles from "./productCard.module.scss";
import {Product} from "../../utils/types";
import FavoriteButton from "../../UI/FavoriteButton";
import {useProductsStore} from "../../stores/useProductsStore";

interface Props {
    product: Product;
}

const ProductCard = ({product}: Props) => {
    const {id, name, variants} = product;
    const toggleFavorite = useProductsStore((state: any) => state.toggleFavorite);
    const favouriteProducts = useProductsStore(
        (state: any) => state.favouriteProducts
    );
    const currentProductId = id;
    const currentVariantId = variants[0]?.id; // Ensure variants[0] exists

    const isFavorite = favouriteProducts
        ? favouriteProducts.some(
            (item : any) =>
                item.info.product_id === currentProductId &&
                item.info.variant_id === currentVariantId
        )
        : false;

    return (
        <>
            <div className={styles.container}>
                <FavoriteButton isFavorite={isFavorite} setIsFavorite={() => {
                    if (variants[0]) {
                        toggleFavorite({
                            id: currentProductId,
                            product_id: currentProductId,
                            variant_id: currentVariantId,
                            quantity: 1
                        });
                    }
                }} />
                <CardLayout id={id} variant={0}>
                    <img src={variants[0].photos[0]} alt="product" className={styles.img}/>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.price}>{variants[0].price}р.</p>
                </CardLayout>
            </div>
        </>
    );
};
export default ProductCard;
