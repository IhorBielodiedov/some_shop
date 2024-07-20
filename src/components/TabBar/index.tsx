import { Link } from "react-router-dom";
import CartSVG from "../../UI/icons/CartSVG";
import HeartSVG from "../../UI/icons/HeartSVG";
import HomeSVG from "../../UI/icons/HomeSVG";
import styles from "./tabBar.module.scss";
import MenuSVG from "../../UI/icons/MenuSVG";

const TabBar = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
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
        <div className={styles.button}>
          <CartSVG />
        </div>
      </Link>
      <Link to="/">
        <div className={styles.button}>
          <MenuSVG />
        </div>
      </Link>
    </div>
  );
};
export default TabBar;
