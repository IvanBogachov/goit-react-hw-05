import { IMG_URL } from "/src/constants/api.js";
import { DEFAULT_IMG_URL } from "/src/constants/api.js";
import styles from "./MovieDetails.module.css";

const MovieDetails = ({
  movieDetail: { backdrop_path, title, overview },
  genres,
  score,
}) => {
  return (
    <div className={styles.contentWrapper}>
      <img
        className={styles.posterImg}
        src={backdrop_path ? IMG_URL + backdrop_path : DEFAULT_IMG_URL}
        alt={title}
      />
      <div className={styles.content}>
        <p className={styles.contentTitle}>{title}</p>
        <span className={styles.score}>User Score: {score}%</span>
        <span className={styles.overviewTitle}>Overview</span>
        <p className={styles.overviewText}>{overview}</p>
        <span className={styles.genresTitle}>Genres</span>
        <p className={styles.genresText}>{genres}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
