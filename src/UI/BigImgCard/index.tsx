import styles from "./bigImgCard.module.scss";
interface Props {
  title: string;
  img: string;
  withImg?: boolean;
}
const BigImgCard = ({ title, img, withImg = true }: Props) => {
  return (
    <div
      className={styles.container}
      style={{ justifyContent: withImg ? "flex-end" : "center" }}
    >
      {withImg && <img src={img} alt="product" className={styles.image} />}
      <div className={styles.wrapper}>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};
export default BigImgCard;
