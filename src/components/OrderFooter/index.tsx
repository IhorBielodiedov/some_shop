import styles from "./orgerFooter.module.scss";
import GradientButton from "../../UI/GradientButton";

interface Props {
  buttonTitle: string;
}

const OrderFooter = ({ buttonTitle }: Props) => {
  return (
      <div className={styles.footer}>
          <div>
              <p className={styles.totalTitle}>Итого:</p>
              <p className={styles.totalText}>27 400р.</p>
          </div>
          <div className={styles.buyButton}>
              <GradientButton
                  title={buttonTitle}
                  titleSize={15}
                  height={49}
                  titleAlign="center"
                  paddingTop={15}
                  paddingBottom={16}
                  gradientDirection="diagonal-left"
                  img={""}
              />
          </div>
      </div>
  );
};

export default OrderFooter;
