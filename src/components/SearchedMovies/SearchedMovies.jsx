import { SearchMoviesItem } from '../SearchedMoviesItem';
import { SearchMoviesList } from './SearchedMovies.styled';

export const SearchMovies = ({ movies }) => {
  return (
    <SearchMoviesList>
      {movies.map(movie => (
        <SearchMoviesItem movie={movie} key={movie.id} />
      ))}
    </SearchMoviesList>
  );
};
