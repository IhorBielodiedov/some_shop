import CardLayout from "../../UI/CardLayout";
import { Product } from "../../utils/types";
import ProductCard from "../ProductCard";
import styles from "./productList.module.scss";
interface Props {
  products: Product[];
}
const ProductList = ({ products }: Props) => {
  // console.log(products);
  return (
    <div className={styles.container}>
      {products.map((item, index) => (
        <ProductCard product={item} />
      ))}
    </div>
  );
};
export default ProductList;
