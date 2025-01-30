import { Specification as Spec } from "../../utils/types";
import styles from "./specification.module.scss";

interface Props {
  specification: Spec;
}
const Specification = ({ specification }: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{specification.title}</p>
      {specification.rows?.map((row) => {
        const isColonAbsent = !row.name.includes(":");
        return (
          <div
            className={styles.row}
            style={{
              display: isColonAbsent ? "flex" : "block",
              justifyContent: isColonAbsent ? "initial" : "flex-start",
            }}
          >
            <p className={styles.name}>{row.name}</p>
            {isColonAbsent && <div className={styles.line} />}
            <p className={styles.value}>{row.value}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Specification;
