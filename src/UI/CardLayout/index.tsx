import { PropsWithChildren } from "react";
import styles from "./cardLayout.module.scss";
import HeartSmallSVG from "../icons/HeartSmallSVG";
import { Link } from "react-router-dom";

interface Props extends PropsWithChildren {
  id: number;
}
const CardLayout = ({ children, id }: Props) => {
  return (
    <Link to={`/product/${id}`}>
      <div className={styles.container}>
        <button className={styles.button}>
          <div className={styles.icon}>
            <HeartSmallSVG />
          </div>
        </button>
        {children}
      </div>
    </Link>
  );
};
export default CardLayout;
