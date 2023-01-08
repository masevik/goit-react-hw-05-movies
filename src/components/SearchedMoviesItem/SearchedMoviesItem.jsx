import { useLocation } from 'react-router-dom';
import { StyledLink, Image } from './SearchedMoviesItem.styled';
import placeholder from '../../images/coverPlaceholder.jpg';

export const SearchMoviesItem = ({ movie }) => {
  const location = useLocation();
  const { id, poster_path, title } = movie;

  return (
    <li key={id} state={{ from: location }}>
      <StyledLink to={`${id}`} state={{ from: location }}>
        {poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
            alt={`poster ${title}`}
          ></Image>
        ) : (
          <Image src={placeholder} alt="placeholder"></Image>
        )}
        {title}
      </StyledLink>
    </li>
  );
};
