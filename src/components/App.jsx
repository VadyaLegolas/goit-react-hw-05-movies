import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    // <div>Hello</div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Home page</h1>} />
        <Route path="movies" element={<h1>Movies</h1>} />
        <Route path="movies/:movieId" element={<h1>Movie</h1>} />
      </Route>
    </Routes>
  );
};
