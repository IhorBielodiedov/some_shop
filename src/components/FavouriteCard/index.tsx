import { Link } from "react-router-dom";
import MediumButton from "../../UI/MediumButton";
import CloseSVG from "../../UI/icons/CloseSVG";
import { Favourite, Product, Variant } from "../../utils/types";
import styles from "./favouriteCard.module.scss";
import MinusSVG from "../../UI/icons/MinusSVG";
import PlusSVG from "../../UI/icons/PlusSVG";
import { useState } from "react";
import { useProductsStore } from "../../stores/useProductsStore";
interface Props {
  product: Product;
  variant: Variant;
  info: Favourite;
  deleteFavorite: (id: number, user_id: number) => void;
}
const FavouriteCard = ({ product, variant, info, deleteFavorite }: Props) => {
  const [amt, setAmt] = useState(info.quantity);
  const categories = useProductsStore((state) => state.categories);

  return (
    <div className={styles.container}>
      <Link
        to={`/product/${product.id}/${variant.id}`}
        className={styles.linkBlock}
      >
        <div className={styles.info}>
          <div className={styles.title}>
            <p className={styles.name}>{product?.name}</p>
            <p className={styles.category}>
              {categories?.[product.category_id]?.name}
            </p>
          </div>
          <div className={styles.footer}>
            {amt ? (
              <div className={styles.count} onClick={(e) => e.preventDefault()}>
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

        <img className={styles.img} src={variant.photos[0]} alt="img" />
      </Link>
      <button
        className={styles.button}
        onClick={() => deleteFavorite(product.id, 1)}
      >
        <CloseSVG color={"var(--main-button-color)"} />
      </button>
    </div>
  );
};
export default FavouriteCard;
