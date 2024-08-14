import ReviewStarSVG from "../../UI/icons/ReviewStarSVG";
import { Review as ReviewT } from "../../utils/types";
import styles from "./review.module.scss";
interface Props {
  review: ReviewT;
}
const Review = ({ review }: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>Name</p>
      <div className={styles.stars}>
        <div className={styles.star}>
          <ReviewStarSVG color="var(--main-button-color)" />
        </div>
        <div className={styles.star}>
          <ReviewStarSVG color="var(--main-button-color)" />
        </div>
        <div className={styles.star}>
          <ReviewStarSVG color="var(--main-button-color)" />
        </div>
        <div className={styles.star}>
          <ReviewStarSVG color="var(--main-button-color)" />
        </div>
        <div className={styles.star}>
          <ReviewStarSVG color="var(--second-text-color)" />
        </div>
      </div>
      <p className={styles.description}>
        {review.description.slice(0, 116)}...
      </p>
      <p className={styles.date}>{review.created_at}</p>
    </div>
  );
};
export default Review;
