import { useLocation } from 'react-router-dom';
import { StyledLink, Image } from './MoviesListItem.styled';
import placeholder from '../../images/coverPlaceholder.jpg';

export const MoviesListItem = ({ movie }) => {
  const location = useLocation();
  const { id, poster_path, title } = movie;
  const src = `https://image.tmdb.org/t/p/w200/${poster_path}`;
  const alt = `poster ${title}`;

  return (
    <li key={id}>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        {poster_path ? (
          <Image src={src} alt={alt}></Image>
        ) : (
          <Image src={placeholder} alt="placeholder"></Image>
        )}
        {title}
      </StyledLink>
    </li>
  );
};
