import { Home } from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { Movies } from '../pages/Movies';
import { MoviesDetails } from 'pages/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

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
