import { useLocation } from 'react-router-dom';
import { StyledLink, Image } from './SearchedMoviesItem.styled';

export const SearchMoviesItem = ({ movie }) => {
  const location = useLocation();
  const { id, poster_path, title } = movie;

  return (
    <li key={id} state={{ from: location }}>
      <StyledLink to={`${id}`} state={{ from: location }}>
        <Image
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={`poster ${title}`}
        ></Image>
        {title}
      </StyledLink>
    </li>
  );
};
