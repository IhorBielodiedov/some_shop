import InputMask from "react-input-mask";
import styles from "./input.module.scss";
import CloseSVG from "../icons/CloseSVG";

interface ValidationRule {
  validate: (value: string) => boolean; // Функция валидации
  message: string; // Сообщение об ошибке
}

interface Props {
  title: string;
  value: string;
  isCheckError: boolean;
  setValue: (value: string) => void;
  useMask?: boolean;
  validationRules?: ValidationRule[]; // Массив правил валидации
}

export const Input = ({
  title,
  value,
  setValue,
  isCheckError,
  useMask,
  validationRules = [],
}: Props) => {
  // Функция проверки валидации
  const validateInput = () => {
    for (const rule of validationRules) {
      if (!rule.validate(value)) {
        return rule.message; // Возвращаем сообщение об ошибке
      }
    }
    return ""; // Если ошибок нет
  };

  const errorMessage = validateInput();

  return (
    <div className={styles.container}>
      {useMask ? (
        <InputMask
          mask="+7 (999) 999-99-99"
          maskChar="_"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          {(inputProps: any) => (
            <input
              {...inputProps}
              className={`${styles.input} ${
                isCheckError && errorMessage ? styles.error : ""
              }`}
              placeholder={title}
            />
          )}
        </InputMask>
      ) : (
        <input
          className={`${styles.input} ${
            isCheckError && errorMessage ? styles.error : ""
          }`}
          placeholder={title}
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      )}
      {value && (
        <button className={styles.button} onClick={() => setValue("")}>
          <CloseSVG color={"var(--acent-black)"} />
        </button>
      )}
      {isCheckError && errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};
