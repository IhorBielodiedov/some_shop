import CardLayout from "../../UI/CardLayout";
import styles from "./productCard.module.scss";
import { Product } from "../../utils/types";
interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { id, name, variants } = product;
  return (
    <CardLayout id={id} variant={0}>
      <div className={styles.container}>
        <img src={variants[0].photos[0]} alt="product" className={styles.img} />
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>{variants[0].price}р.</p>
      </div>
    </CardLayout>
  );
};
export default ProductCard;
