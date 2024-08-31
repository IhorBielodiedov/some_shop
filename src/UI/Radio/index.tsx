import styles from "./input.module.scss";
import SPBBankSVG from "../icons/SPBBankSVG";

interface Props {
    title: string;
    description?: string;
    selectedOption: string;
    handleOptionChange: (title: string) => void;
}

export const Radio = ({ title, description, selectedOption, handleOptionChange }: Props) => {
    return (
        <div
            className={`${styles.container} ${selectedOption === title ? styles.isSelected : ""}`}
            onClick={() => handleOptionChange(title)}
        >
            <div className={styles.inputBlock}>
                <input
                    type="radio"
                    className={styles.input}
                    id={title}
                    name="paymentOption"
                    value={title}
                    checked={selectedOption === title}
                    onChange={() => handleOptionChange(title)}
                />
                <label htmlFor={title}>{title}</label>
            </div>

            {description ? (
                <p className={styles.descriptionText}>{description}</p>
            ) : (
                <SPBBankSVG />
            )}
        </div>
    );
};