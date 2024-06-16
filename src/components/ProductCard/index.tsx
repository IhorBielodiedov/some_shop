import CardLayout from "../../UI/CardLayout";
import styles from "./productCard.module.scss";
import productImg from "../../assets/img/product.png";
import { Product } from "../../utils/types";
interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { id, name, price, colors } = product;
  return (
    <CardLayout id={id}>
      <div className={styles.container}>
        <img src={productImg} alt="product" className={styles.img} />
        <div className={styles.colorList}>
          {colors.map(() => (
            <div className={styles.circle} />
          ))}
        </div>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>{price}р.</p>
      </div>
    </CardLayout>
  );
};
export default ProductCard;
