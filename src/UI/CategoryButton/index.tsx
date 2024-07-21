import styles from "./categoryButton.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  active?: boolean;
  big?: boolean;
}
const CategoryButton = ({
  title,
  active = false,
  big = false,
  ...attrs
}: Props) => {
  return (
    <button
      className={`${big ? styles.big_button : styles.small_button} ${
        active && styles.active
      }`}
      {...attrs}
    >
      <p className={`${styles.title} ${active && styles.active}`}>{title}</p>
    </button>
  );
};
export default CategoryButton;
