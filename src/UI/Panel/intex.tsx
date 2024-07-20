import ArrowSVG from "../icons/ArrowSVG";
import styles from "./panel.module.scss";

interface Props {
  title: string;
  icon?: JSX.Element;
  color: string;
  withBottom?: boolean;
}
const Panel = ({ title, icon, color, withBottom = false }: Props) => {
  return (
    <div
      className={styles.container}
      style={{
        borderBottom: withBottom
          ? "solid 1.35px var(--second-background-color)"
          : "none",
      }}
    >
      <div className={styles.wrapper}>
        {icon ? <div className={styles.icon}>{icon}</div> : <></>}
        <p className={styles.title} style={{ color: color }}>
          {title}
        </p>
      </div>
      <ArrowSVG />
    </div>
  );
};
export default Panel;
