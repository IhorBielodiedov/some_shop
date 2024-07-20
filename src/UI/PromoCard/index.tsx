import styles from "./promoCard.module.scss";
interface Props {
  img: string;
  title: string;
}
const PromoCard = ({ img, title }: Props) => {
  return (
    <div className={styles.container}>
      <img src={img} alt="product" className={styles.image} />
      <p className={styles.title}>{title}</p>
    </div>
  );
};
export default PromoCard;
