import {useState} from "react";
import styles from "./input.module.scss";
import CloseSVG from "../icons/CloseSVG";

interface Props {
    title: string;
    value: string;
    isCheckError: boolean;
    setValue: (value: string) => void;
}

export const Input = ({title, value, setValue, isCheckError}: Props) => {

    return (
        <div className={styles.container}>
            <input
                className={`${styles.input} ${isCheckError && value.length === 0 ? styles.error : ''}`}
                placeholder={title}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
            {value &&
                <button className={styles.button} onClick={() => setValue('')}>
                    <CloseSVG color={"var(--acent-black)"}/>
                </button>
            }

        </div>

    );
};
