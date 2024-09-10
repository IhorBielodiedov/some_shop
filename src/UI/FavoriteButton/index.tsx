import styles from "./favoriteButton.module.scss";
import HeartSmallSVG from "../icons/HeartSmallSVG";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isFavorite: boolean;
    setIsFavorite: (value: boolean) => void;
}
const FavoriteButton = ({ isFavorite, setIsFavorite, ...atr }: Props) => {
  return (
      <button className={`${styles.button} ${isFavorite ? styles.favorite : ""}`}
              onClick={() => setIsFavorite(!isFavorite)}>
          <div className={styles.icon}>
              <HeartSmallSVG/>
          </div>
      </button>
  );
};
export default FavoriteButton;
