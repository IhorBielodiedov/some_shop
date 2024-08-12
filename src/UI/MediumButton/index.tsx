import styles from "./mediumButton.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}
const MediumButton = ({ title, ...attrs }: Props) => {
  return (
    <button className={styles.button} {...attrs}>
      <p className={styles.title}>{title}</p>
    </button>
  );
};
export default MediumButton;
