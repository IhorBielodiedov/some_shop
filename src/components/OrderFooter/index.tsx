import styles from "./orgerFooter.module.scss";
import GradientButton from "../../UI/GradientButton";
import { useNavigate } from "react-router-dom";
import {formatNumberWithSpaces} from "../../utils/helper";

interface Props {
  buttonTitle: string;
  amount: number;
}

const OrderFooter = ({ buttonTitle, amount }: Props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.footer}>
      <div className={styles.textBlock}>
        <p className={styles.totalTitle}>Итого:</p>
        <p className={styles.totalText}>{formatNumberWithSpaces(amount)}р.</p>
      </div>
      <div className={styles.buyButton}>
        <GradientButton
          title={buttonTitle}
          titleSize={15}
          height={49}
          titleAlign="center"
          paddingTop={15}
          paddingBottom={16}
          borderRadius={13}
          gradientDirection="diagonal-left"
          img={""}
          onClick={() => {
            navigate("/orderData");
          }}
        />
      </div>
    </div>
  );
};

export default OrderFooter;
