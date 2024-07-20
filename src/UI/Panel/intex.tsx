import ArrowSVG from "../icons/ArrowSVG";
import styles from "./panel.module.scss";

interface Props {
  title: string;
  withBottom?: boolean;
}
const Panel = ({ title, withBottom = false }: Props) => {
  return (
    <div
      className={styles.container}
      style={{
        borderBottom: withBottom
          ? "solid 1.35px var(--second-background-color)"
          : "none",
      }}
    >
      <p className={styles.title}>{title}</p>
      <ArrowSVG />
    </div>
  );
};
export default Panel;
