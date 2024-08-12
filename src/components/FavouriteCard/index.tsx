import { Link } from "react-router-dom";
import MediumButton from "../../UI/MediumButton";
import CloseSVG from "../../UI/icons/CloseSVG";
import { CATEGORIES } from "../../utils/constants";
import { Product, Variant } from "../../utils/types";
import styles from "./favouriteCard.module.scss";
interface Props {
  product: Product;
  variant: Variant;
}
const FavouriteCard = ({ product, variant }: Props) => {
  return (
    <Link
      to={`/product/${product.id}/${variant.id}`}
      className={styles.container}
    >
      <div className={styles.info}>
        <div className={styles.title}>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.category}>
            {CATEGORIES[product.category_id].name}
          </p>
        </div>
        <div className={styles.footer}>
          <MediumButton title={"В корзину"} />
          <p className={styles.price}>49 999р.</p>
        </div>
      </div>
      <img className={styles.img} src={variant?.photos?.[0]} alt="img" />
      <button className={styles.button}>
        <CloseSVG color={"var(--main-button-color)"} />
      </button>
    </Link>
  );
};
export default FavouriteCard;
