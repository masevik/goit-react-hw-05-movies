import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MoviesDetails } from 'pages/MovieDetails';
import { SharedLayout } from './SharedLayout';
import { Cast } from './Cast/';
import { Reviews } from './Reviews/';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:moviesId" element={<MoviesDetails />}>
          <Route path="/movies/:moviesId/cast" element={<Cast />} />
          <Route path="/movies/:moviesId/reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
