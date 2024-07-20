import { Link } from "react-router-dom";
import styles from "./bigImgCard.module.scss";
interface Props {
  title: string;
  img: string;
  link: string;
  withImg?: boolean;
}
const BigImgCard = ({ title, img, link, withImg = true }: Props) => {
  return (
    <Link
      to={link}
      className={styles.container}
      style={{ justifyContent: withImg ? "flex-end" : "center" }}
    >
      {withImg && <img src={img} alt="product" className={styles.image} />}
      <div className={styles.wrapper}>
        <p className={styles.title}>{title}</p>
      </div>
    </Link>
  );
};
export default BigImgCard;
