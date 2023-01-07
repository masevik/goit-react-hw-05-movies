import PropTypes from 'prop-types';
import {
  TrendingMoviesStyledItem,
  Image,
  StyledLink,
} from './TrendingMoviesItem.styled';

export const TrendingMoviesItem = ({ movie }) => {
  const { id, poster_path, title } = movie;

  return (
    <TrendingMoviesStyledItem key={id}>
      <StyledLink to={`movies/${id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={`poster ${title}`}
        ></Image>
        {title}
      </StyledLink>
    </TrendingMoviesStyledItem>
  );
};

TrendingMoviesItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
