import HeartSmallSVG from "../icons/HeartSmallSVG";
import styles from "./likeButton.module.scss";

interface Props {
    isFavorite: boolean;
    onClick: () => void;
}

const LikeButton = ( {isFavorite, onClick} : Props) => {
  return (
    <button className={`${styles.button} ${isFavorite ? styles.favorite: ''}`} onClick={onClick}>
      <HeartSmallSVG />
    </button>
  );
};
export default LikeButton;
