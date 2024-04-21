import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import {Home} from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import NotFound from '../pages/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="movies" element={<Movies/>} />
        <Route path="movies/:movieId" element={<MovieDetails/>} />
        <Route path="movies/:movieId/cast" element={<h1>Cast</h1>} />
        <Route path="movies/:movieId/reviews" element={<h1>Reviews</h1>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
