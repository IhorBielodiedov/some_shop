import { useState } from "react";
import styles from "./input.module.scss";
interface Props {
  title: string;
}
export const Radio = ({ title }: Props) => {
  return (
    <>
      <input
        type="radio"
        className={styles.input}
        id={title}
        name={title}
        value={title}
      />
      <label htmlFor={title}>{title}</label>
    </>
  );
};
