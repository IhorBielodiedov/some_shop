import styles from "./marketplaceButton.module.scss";
interface Props {
  img: string;
  title: string;
}
const MarketplaceButton = ({ img, title }: Props) => {
  return (
    <button className={styles.container}>
      <img className={styles.image} src={img} alt={title} />
      <p className={styles.title}>{title}</p>
    </button>
  );
};
export default MarketplaceButton;
