import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchMovieCredits } from "/src/api/movies.js";
import ErrorMessage from "/src/components/ErrorMessage/ErrorMessage.jsx";
import Loader from "/src/components/Loader/Loader";
import CastCard from "/src/components/CastCard/CastCard";
import NoFoundMessage from "/src/components/NoFoundMessage/NoFoundMessage";
import styles from "./Cast.module.css";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoadind] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const handleMovieCredits = async () => {
      if (!movieId) return;

      setIsLoadind(true);
      setIsError(false);

      try {
        const { cast } = await fetchMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoadind(false);
      }
    };
    handleMovieCredits();
  }, [movieId]);

  return (
    <ul className={styles.cardList}>
      {cast &&
        !isLoading &&
        cast.map(({ id, ...rest }) => {
          return (
            <li className={styles.cardItem} key={id}>
              <CastCard data={rest} />
            </li>
          );
        })}
      {cast && cast.length === 0 && (
        <NoFoundMessage
          text={"Unfortunately, there are no cast for this movie"}
        />
      )}

      {isLoading && <Loader />}

      {isError && <ErrorMessage />}
    </ul>
  );
};

export default Cast;
