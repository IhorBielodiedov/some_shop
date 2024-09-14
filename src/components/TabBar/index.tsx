import { Link } from "react-router-dom";
import CartSVG from "../../UI/icons/CartSVG";
import HeartSVG from "../../UI/icons/HeartSVG";
import HomeSVG from "../../UI/icons/HomeSVG";
import styles from "./tabBar.module.scss";
import MenuSVG from "../../UI/icons/MenuSVG";
import {useCartStore} from "../../stores/cartStore";

const TabBar = () => {
    const products = useCartStore((state : any) => state.products);

    return (
    <div className={styles.container}>
      <Link to="/favourites">
        <div className={styles.button}>
          <HeartSVG />
        </div>
      </Link>
      <Link to="/">
        <div className={styles.button}>
          <HomeSVG />
        </div>
      </Link>
      <Link to="/cart">
        <div className={`${styles.button} ${styles.cartBtn}`}>
            <span className={styles.productAmount}>{products.length}</span>
          <CartSVG />
        </div>
      </Link>
      <Link to="/">
        <div className={styles.button}>
          <MenuSVG color={"var(--main-text-color)"} />
        </div>
      </Link>
    </div>
  );
};
export default TabBar;
