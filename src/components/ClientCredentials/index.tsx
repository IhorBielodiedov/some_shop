import { Input } from "../../UI/Input";
import styles from "./clientCredentials.module.scss";
import { useOrderStore } from "../../stores/orderStore";

interface Props {
  isCheckError: boolean;
}
const ClientCredentials = ({ isCheckError }: Props) => {
  const client = useOrderStore((state) => state.client);
  const updateClientProperty = useOrderStore(
    (state) => state.updateClientProperty
  );

  return (
    <>
      {client && (
        <div className={styles.inputs}>
          <Input
            title="Имя"
            value={client?.firstName}
            setValue={(e) => updateClientProperty("firstName", e)}
            isCheckError={isCheckError}
            validationRules={[
              {
                validate: (value) => value?.trim() !== "" && value !== null,
                message: "Поле не должно быть пустым",
              },
            ]}
          />
          <Input
            title="Фамилия"
            value={client?.lastName}
            setValue={(e) => updateClientProperty("lastName", e)}
            isCheckError={isCheckError}
            validationRules={[
              {
                validate: (value) => value?.trim() !== "" && value !== null,
                message: "Поле не должно быть пустым",
              },
            ]}
          />
          <Input
            title="Телефон"
            value={client?.phone}
            setValue={(e) => updateClientProperty("phone", e)}
            isCheckError={isCheckError}
            useMask
            validationRules={[
              {
                validate: (value) => value?.trim() !== "" && value !== null,
                message: "Поле не должно быть пустым",
              },

              {
                validate: (value) => value !== "+7 (___) ___-__-__",
                message: "Поле не должно быть пустым",
              },
              {
                validate: (value) =>
                  /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value),
                message: "Введите корректный номер телефона",
              },
            ]}
          />
          <Input
            title="Email"
            value={client?.email}
            setValue={(e) => updateClientProperty("email", e)}
            isCheckError={isCheckError}
            validationRules={[
              {
                validate: (value) => value?.trim() !== "" && value !== null,
                message: "Поле не должно быть пустым",
              },
              {
                validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
                message: "Введите корректный email",
              },
            ]}
          />
        </div>
      )}
    </>
  );
};

export default ClientCredentials;
