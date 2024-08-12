import { Link } from "react-router-dom";
import MediumButton from "../../UI/MediumButton";
import CloseSVG from "../../UI/icons/CloseSVG";
import { CATEGORIES } from "../../utils/constants";
import { Favourite, Product, Variant } from "../../utils/types";
import styles from "./favouriteCard.module.scss";
import MinusSVG from "../../UI/icons/MinusSVG";
import PlusSVG from "../../UI/icons/PlusSVG";
import { useState } from "react";
interface Props {
  product: Product;
  variant: Variant;
  info: Favourite;
}
const FavouriteCard = ({ product, variant, info }: Props) => {
  const [amt, setAmt] = useState(info.quantity);
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
          {amt ? (
            <div className={styles.count}>
              <button
                className={styles.countButton}
                onClick={(e) => {
                  e.preventDefault();
                  setAmt((state) => state && state - 1);
                }}
              >
                <MinusSVG />
              </button>
              <p>{amt}</p>
              <button
                className={styles.countButton}
                onClick={(e) => {
                  e.preventDefault();
                  setAmt((state) => state + 1);
                }}
              >
                <PlusSVG />
              </button>
            </div>
          ) : (
            <MediumButton
              title={"В корзину"}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setAmt((state) => state + 1);
              }}
            />
          )}
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
