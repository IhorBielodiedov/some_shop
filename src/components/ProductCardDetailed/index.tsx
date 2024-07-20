import CardLayout from "../../UI/CardLayout";
import styles from "./productCardDetailed.module.scss";
import { Product } from "../../utils/types";
import MediumButton from "../../UI/MediumButton";
interface Props {
  product: Product;
}
const ProductCardDetailed = ({ product }: Props) => {
  const { id, name, description, price, img } = product;
  return (
    <CardLayout id={id}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.title}>{name}</p>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.action}>
            <MediumButton title={"Купить"} />
            <p className={styles.price}>{price}р.</p>
          </div>
        </div>
        <div className={styles.imgWrapper}>
          <img src={img} className={styles.img} />
        </div>
      </div>
    </CardLayout>
  );
};
export default ProductCardDetailed;
