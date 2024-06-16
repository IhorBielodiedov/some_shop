import styles from "./categoryButton.module.scss";

interface Props {
  title: string;
  active?: boolean;
  big?: boolean;
}
const CategoryButton = ({ title, active = false, big = false }: Props) => {
  return (
    <button
      className={`${big ? styles.big_button : styles.small_button} ${
        active && styles.active
      }`}
    >
      <p className={`${styles.title} ${active && styles.active}`}>{title}</p>
    </button>
  );
};
export default CategoryButton;
