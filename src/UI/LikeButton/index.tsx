import HeartSmallSVG from "../icons/HeartSmallSVG";
import styles from "./likeButton.module.scss";

const LikeButton = () => {
  return (
    <button className={styles.button}>
      <HeartSmallSVG />
    </button>
  );
};
export default LikeButton;
