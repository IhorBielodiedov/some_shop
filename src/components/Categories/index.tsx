import CategoryButton from "../../UI/CategoryButton";
import styles from "./categories.module.scss";

interface Props {
  list: string[];
  big?: boolean;
  wrap?: boolean;
}

const Categories = ({ big = false, list, wrap = false }: Props) => {
  return (
    <>
      <div
        className={styles.container}
        style={{ flexWrap: wrap ? "wrap" : "nowrap" }}
      >
        {list.map((item, index) => (
          <CategoryButton
            title={item}
            key={index}
            active={index === 0}
            big={big}
          />
        ))}
      </div>
    </>
  );
};
export default Categories;
