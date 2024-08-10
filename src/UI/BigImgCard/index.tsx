import { Link } from "react-router-dom";
import styles from "./bigImgCard.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  img: string;
  link: string;
  withImg?: boolean;
}
const BigImgCard = ({ title, img, link, withImg = true, ...attrs }: Props) => {
  return (
    <Link to={link} className={styles.container}>
      <button
        className={styles.content}
        style={{ justifyContent: withImg ? "space-between" : "center" }}
        {...attrs}
      >
        {withImg && <img src={img} alt="product" className={styles.image} />}
        <div className={styles.wrapper}>
          <p className={styles.title}>{title}</p>
        </div>
      </button>
    </Link>
  );
};
export default BigImgCard;
