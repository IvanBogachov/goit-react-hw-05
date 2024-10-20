import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchMovieReview } from "/src/api/movies.js";
import Loader from "/src/components/Loader/Loader";
import ErrorMessage from "/src/components/ErrorMessage/ErrorMessage";
import ReviewCard from "/src/components/ReviewCard/ReviewCard";
import NoFoundMessage from "/src/components/NoFoundMessage/NoFoundMessage";

import styles from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const handleMovieReview = async () => {
      if (!movieId) return;

      setIsLoading(true);
      setIsError(false);

      try {
        const { results } = await fetchMovieReview(movieId);
        setReviews(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    handleMovieReview();
  }, [movieId]);

  return (
    <div className={styles.content}>
      {reviews && reviews.length > 0 && <ReviewCard reviews={reviews} />}
      {reviews && reviews.length === 0 && (
        <NoFoundMessage
          text={"Unfortunately, there are no reviews for this movie"}
        />
      )}
      {isLoading && reviews === null && <Loader />}
      {isError && <ErrorMessage />}
    </div>
  );
};

export default MovieReviews;
