import styles from "./mediumButton.module.scss";

interface Props {
  title: string;
}
const MediumButton = ({ title }: Props) => {
  return (
    <button className={styles.button}>
      <p className={styles.title}>{title}</p>
    </button>
  );
};
export default MediumButton;
