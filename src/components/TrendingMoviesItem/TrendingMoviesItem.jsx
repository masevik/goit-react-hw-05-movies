import PropTypes from 'prop-types';
import {
  TrendingMoviesStyledItem,
  Image,
  StyledLink,
} from './TrendingMoviesItem.styled';

export const TrendingMoviesItem = ({ movie }) => {
  return (
    <TrendingMoviesStyledItem key={movie.id}>
      <StyledLink to={`movies/${movie.id}`}>
        <Image
          src={'https://image.tmdb.org/t/p/w200' + movie.poster_path}
          alt={movie.media_type + ' ' + movie.original_title}
        ></Image>
        {movie.original_title}
      </StyledLink>
    </TrendingMoviesStyledItem>
  );
};

TrendingMoviesItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
