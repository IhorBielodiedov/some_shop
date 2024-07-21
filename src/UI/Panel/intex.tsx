import ArrowSVG from "../icons/ArrowSVG";
import styles from "./panel.module.scss";

/**
 * Description placeholder
 *
 * @interface Props
 * @property {string} title - заголовок
 * @property {JSX.Element} icon - иконка (если есть)
 * @property {string} color - цвет
 * @property {string} additionalText - дополнительный текст
 * @property {boolean} withBottom - нижняя граница
 */
interface Props {
  title: string;
  icon?: JSX.Element;
  color: string;
  additionalText?: string;
  withBottom?: boolean;
}
const Panel = ({
  title,
  icon,
  color,
  additionalText,
  withBottom = false,
}: Props) => {
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
      <div className={styles.wrapper}>
        <p className={styles.additionalText}>{additionalText}</p>
        <ArrowSVG />
      </div>
    </div>
  );
};
export default Panel;
