import axios from "axios";
import { API_PATH } from "constants/api";

const ACCESS_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTFjMDhjYzBmYjVkODU3ODJmYWFiYTNiMTdlMDBjOSIsIm5iZiI6MTcyODkzMDYxOS42MjQ1MjksInN1YiI6IjY3MGQ1ZmVjMGI4MDA1MzdkNzVjOGVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BS2L6fQvcbzkdsfW0f6i0fT7J25bVE-wJfevJkyQqDg";

axios.defaults.baseURL =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";
axios.defaults.headers = {
  Authorization: `Bearer ${ACCESS_KEY}`,
  accept: "application/json",
};

export const fetchTrendMovies = async () => {
  const response = await axios.get(API_PATH.trend, {});
  return response.data;
};

export const fetchSearchMovie = async (query, page = 1) => {
  const response = await axios.get(API_PATH.search, {
    params: {
      query,
      page,
    },
  });

  return response.data;
};

export const fetchMovieById = async (id) => {
  const response = await axios.get(API_PATH.movie + id + "?");
  return response.data;
};

export const fetchMovieCredits = async (id) => {
  const response = await axios.get(API_PATH.movie + id + "/credits?");
  return response.data;
};

export const fetchMovieReview = async (id) => {
  const response = await axios.get(API_PATH.movie + id + "/reviews?");
  return response.data;
};
