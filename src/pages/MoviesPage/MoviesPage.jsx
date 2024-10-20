import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchMovie } from "/src/api/movies.js";

import ErrorMessage from "/src/components/ErrorMessage/ErrorMessage";
import Loader from "/src/components/Loader/Loader";
import MovieList from "/src/components/MovieList/MovieList";
import SearchForm from "/src/components/SearchForm/SearchForm";
import { Heading } from "/src/components/Heading/Heading";
import NoFoundMessage from "/src/components/NoFoundMessage/NoFoundMessage";

const MoviePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get("query") ?? "";
  const [search, setSearch] = useState(queryValue);
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!queryValue) return;
    const handleSearchMoviez = async () => {
      setIsLoading(true);
      setIsError(false);
      setMovies(null);

      try {
        const { results } = await fetchSearchMovie(queryValue);
        setMovies(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    handleSearchMoviez();
  }, [queryValue]);
  const handleChange = (searchValue) => {
    setSearch(searchValue);
  };
  const handleSearchMovie = (event) => {
    if (search.trim() !== "") {
      setSearchParams({ query: search.trim() });
    }
  };

  return (
    <section className="container">
      <Heading title={"Searching movies"} />

      <SearchForm
        handleChange={handleChange}
        handleSearchMovie={handleSearchMovie}
        query={search}
      />

      {movies && <MovieList data={movies} />}

      {movies && movies.length === 0 && (
        <NoFoundMessage text={"Movies with search criteria not found"} />
      )}

      {isLoading && <Loader />}

      {isError && <ErrorMessage />}
    </section>
  );
};

export default MoviePage;
