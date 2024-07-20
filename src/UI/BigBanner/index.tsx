import styles from "./bigBanner.module.scss";
interface Props {
  img: string;
  title: string;
  text: string;
}
const BigBanner = ({ img, title, text }: Props) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={img} alt="img" />
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
export default BigBanner;
