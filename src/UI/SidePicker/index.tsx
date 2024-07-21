import styles from "./sidePicker.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  img: string;
  active?: boolean;
}
const SidePicker = ({ img, active = false, ...attrs }: Props) => {
  return (
    <button
      className={styles.container}
      style={{
        border: active
          ? "1.35px solid var(--main-button-color)"
          : "1.35px solid var(--main-background-color)",
      }}
      {...attrs}
    >
      <img src={img} alt={img} />
    </button>
  );
};
export default SidePicker;
