import { useEffect } from "react";
import { useOrderStore } from "../../stores/orderStore";
import { Radio } from "../../UI/Radio";
import styles from "./paymentMethodsPanel.module.scss";

const PaymentMethodsPanel = () => {
  const getPaymentMethods = useOrderStore((state) => state.getPaymentMethods);
  const paymentMethods = useOrderStore((state) => state.paymentMethods);
  const paymentMethod = useOrderStore((state) => state.client.paymentMethod);
  const updateClientProperty = useOrderStore(
    (state) => state.updateClientProperty
  );

  useEffect(() => {
    !paymentMethods && getPaymentMethods();
  }, []);

  return (
    <div className={styles.container}>
      {paymentMethods?.map((method) => (
        <Radio
          title={method.name}
          description={method.description}
          handleOptionChange={() =>
            updateClientProperty("paymentMethod", method)
          }
          selectedOption={paymentMethod.name}
        />
      ))}
    </div>
  );
};

export default PaymentMethodsPanel;
