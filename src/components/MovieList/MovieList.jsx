import { Link, useLocation } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";
const MovieList = ({ data }) => {
  const location = useLocation();

  return (
    <ul className={styles.cardList}>
      {data.map(({ id, ...rest }) => (
        <Link key={id} to={"/movies/" + id} state={location}>
          <li className={styles.cardItem}>
            <MovieCard data={rest} />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default MovieList;
