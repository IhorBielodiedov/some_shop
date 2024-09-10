import {PropsWithChildren} from "react";
import styles from "./cardLayout.module.scss";
import { Link } from "react-router-dom";

interface Props extends PropsWithChildren {
  id: number;
  variant: number;
}
const CardLayout = ({ children, id, variant }: Props) => {
  return (
    <Link to={`/product/${id}/${variant}`}>
      <div className={styles.container}>
        {children}
      </div>
    </Link>
  );
};
export default CardLayout;
