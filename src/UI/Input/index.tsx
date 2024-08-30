import { useState } from "react";
import styles from "./input.module.scss";
interface Props {
  title: string;
}
export const Input = ({ title }: Props) => {
  const [value, setValue] = useState<string>();
  return (
    <input
      className={styles.input}
      placeholder={title}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};
