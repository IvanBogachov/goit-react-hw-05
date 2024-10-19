import { useState, useEffect } from "react";
import { fetchTrendMovies } from "/src/api/movies.js";

import { Heading } from "/src/components/Heading/Heading";
import Loader from "/src/components/Loader/Loader";
import ErrorMessage from "/src/components/ErrorMessage/ErrorMessage";
import MovieList from "/src/components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const handleTrendMovies = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const { result } = await fetchTrendMovies();
        setMovies(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
      handleTrendMovies();
    };
  }, []);

  return (
    <section className="container">
      <Heading title={"Trending today"} />
      {movies.length > 0 && !isLoading && <MovieList data={movies} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </section>
  );
};

export default HomePage;
