import PropTypes from 'prop-types';
import { TrendingMoviesItem } from 'components/TrendingMoviesItem';
import { TrendingMoviesList } from './TrendingMovies.styled';

export const TrendingMovies = ({ movies }) => {
  return (
    <TrendingMoviesList>
      {movies.map(movie => (
        <TrendingMoviesItem movie={movie} key={movie.id} />
      ))}
    </TrendingMoviesList>
  );
};

TrendingMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};
