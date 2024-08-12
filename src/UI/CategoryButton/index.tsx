import { useEffect, useRef } from "react";
import styles from "./categoryButton.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  active?: boolean;
  big?: boolean;
  doFocus?: boolean;
}
const CategoryButton = ({
  title,
  active = false,
  big = false,
  doFocus = false,
  ...attrs
}: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (active && buttonRef.current && doFocus) {
      buttonRef.current.scrollIntoView({
        inline: "center",
      });
    }
  }, [active]);

  return (
    <button
      ref={buttonRef}
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
