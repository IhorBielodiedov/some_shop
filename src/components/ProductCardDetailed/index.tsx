import CardLayout from "../../UI/CardLayout";
import styles from "./productCardDetailed.module.scss";
import {Product} from "../../utils/types";
import MediumButton from "../../UI/MediumButton";
import FavoriteButton from "../../UI/FavoriteButton";
import {useState} from "react";
import {useProductStore} from "../../stores/cartStore";

interface Props {
    product: Product;
}

const ProductCardDetailed = ({product}: Props) => {
    const {id, name, description, variants} = product;
    const [isFavorite, setIsFavorite] = useState(false);
    const addProduct = useProductStore((state : any) => state.addProduct);

    return (
        <div className={styles.cardBlock}>
            <FavoriteButton isFavorite={isFavorite} setIsFavorite={setIsFavorite}/>
            <CardLayout id={id} variant={0}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.text}>
                            <p className={styles.title}>{name}</p>
                            <p className={styles.description}>Яндекс станция</p>
                        </div>
                        <div className={styles.action}>
                            <MediumButton title={"Купить"} onClick={(e) => {
                                e.preventDefault();
                                addProduct(product);
                            }}
                            />
                            <p className={styles.price}>{variants[0].price}р.</p>
                        </div>
                    </div>
                    <div className={styles.imgWrapper}>
                        <img src={variants[0].photos[0]} className={styles.img} alt="img"/>
                    </div>
                </div>
            </CardLayout>
        </div>);
};
export default ProductCardDetailed;
