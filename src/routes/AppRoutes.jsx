import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Cast from "../components/Cast/Cast.jsx";
import Reviews from "../components/Reviews/Reviews.jsx";
import Loader from "../components/Loader/Loader.jsx";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("../pages/MoviePage/MoviePage.jsx"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage.jsx")
);

const AppRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:movieID" element={<MovieDetailsPage />}>
        <Route path="cast" element={<Cast />} />
        <Route path="revies" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Suspense>
);
export default AppRoutes;
