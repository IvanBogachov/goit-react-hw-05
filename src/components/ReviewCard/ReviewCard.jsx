import { DEFAULT_IMG_URL } from "/src/constants/api.js";
import { IMG_URL } from "/src/constants/api.js";

import styles from "./ReviewCard.module.css";

const ReviewCard = ({ reviews }) => {
  return (
    <>
      {reviews.map(
        ({ id, author, content, author_details: { avatar_path, rating } }) => (
          <article key={id}>
            <h3 className={styles.reviewTitle}>{"Author: " + author}</h3>
            <div className={styles.reviewContentWrapper}>
              <img
                className={styles.reviewImage}
                src={avatar_path ? IMG_URL + avatar_path : DEFAULT_IMG_URL}
                alt={author + " avatar"}
              />
              <div className={styles.reviewContent}>
                <p className={styles.reviewRating}>
                  Rating:
                  <span className={styles.reviewRatingValue}>
                    {rating ? rating : 0}
                  </span>
                </p>
                <p className={styles.reviewDescription}>{content}</p>
              </div>
            </div>
          </article>
        )
      )}
    </>
  );
};

export default ReviewCard;
