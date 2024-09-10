import CardLayout from "../../UI/CardLayout";
import styles from "./productCard.module.scss";
import {Product} from "../../utils/types";
import {useState} from "react";
import FavoriteButton from "../../UI/FavoriteButton";

interface Props {
    product: Product;
}

const ProductCard = ({product}: Props) => {
    const {id, name, variants} = product;
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <>
            <div className={styles.container}>
                <FavoriteButton isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
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
