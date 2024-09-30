import { Product } from "../../utils/types";
import ProductCard from "../ProductCard";
import styles from "./productList.module.scss";

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {

  return (
    <div className={styles.container}>
      {products.map((item, index) => (
        <ProductCard product={item} key = {index} />
      ))}
    </div>
  );
};
export default ProductList;
