import styles from "./comparisonPanel.module.scss";

const ComparisonPanel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <p className={styles.price}>от 12321р.</p>
        <p className={styles.hint}>на маркетплейсах</p>
      </div>
      <div className={styles.circleWrapper}>
        <div className={styles.circleCol}>
          <div className={styles.circle} />
          <div className={styles.circle} />
        </div>
        <div className={styles.circleCol}>
          <div className={styles.circle} />
          <div className={styles.circle} />
        </div>
      </div>
    </div>
  );
};
export default ComparisonPanel;
