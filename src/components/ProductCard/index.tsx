import CardLayout from "../../UI/CardLayout";
import styles from "./productCard.module.scss";
import { Product } from "../../utils/types";
interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { id, name, price, img } = product;
  return (
    <CardLayout id={id}>
      <div className={styles.container}>
        <img src={img} alt="product" className={styles.img} />
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>{price}р.</p>
      </div>
    </CardLayout>
  );
};
export default ProductCard;
