import { SearchedMoviesItem } from '../SearchedMoviesItem';
import { SearchedMoviesList } from './SearchedMovies.styled';

export const SearchedMovies = ({ movies }) => {
  return (
    <SearchedMoviesList>
      {movies.map(movie => (
        <SearchedMoviesItem movie={movie} key={movie.id} />
      ))}
    </SearchedMoviesList>
  );
};
