import { PropsWithChildren, useState } from "react";
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
interface Props
  extends PropsWithChildren,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: JSX.Element;
  color: string;
  additionalText?: string;
  withBottom?: boolean;
}
const Panel = ({
  children,
  title,
  icon,
  color,
  additionalText,
  withBottom = false,
  ...args
}: Props) => {
  const [opened, setOpened] = useState(false);
  return (
    <button
      className={styles.container}
      style={{
        width: "100%",
        borderBottom: withBottom
          ? "solid 1.35px var(--second-background-color)"
          : "none",
      }}
      {...args}
    >
      <div
        className={styles.panel}
        onClick={() => setOpened((state) => !state)}
      >
        <div className={styles.wrapper}>
          {icon ? <div className={styles.icon}>{icon}</div> : <></>}
          <p className={styles.title} style={{ color: color }}>
            {title}
          </p>
        </div>
        <div className={styles.wrapper}>
          <p className={styles.additionalText}>{additionalText}</p>
          <div className={`${styles.arrow} ${opened ? styles.rotated : ""}`}>
            <ArrowSVG />
          </div>
        </div>
      </div>
      {opened && <div>{children}</div>}
    </button>
  );
};
export default Panel;
