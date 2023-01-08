import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieById } from '../../components/API';
import { Box } from 'components/Box';
import { Loader } from '../../components/Loader';
import { errorMessage } from '../../components/ErrorMessage';
import { BackLink } from '../../components/BackLink';
import { MovieAddInfo } from '../../components/MovieAddInfo';
import { Overview, Genres, Image, Title } from './MovieDetails.styled';
import placeholder from '../../images/coverPlaceholder.jpg';

export const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { moviesId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getMovieById = async id => {
      if (id === undefined) {
        return;
      }

      try {
        setIsLoading(true);
        const movie = await fetchMovieById(id);
        setMovie(movie);
      } catch {
        errorMessage();
      } finally {
        setIsLoading(false);
      }
    };

    getMovieById(moviesId);
  }, [moviesId]);

  if (movie === null) {
    return;
  }

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  const genresList = genres.map(genre => genre.name);

  return (
    <Box paddingLeft="16px" paddingRight="16px" paddingTop="10px">
      <BackLink to={backLinkHref}>Go back</BackLink>
      <Box
        display="flex"
        marginTop="10px"
        borderBottom="1px solid #3f51b5"
        marginBottom="10px"
      >
        {poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
            alt={`poster ${title}`}
          ></Image>
        ) : (
          <Image src={placeholder} alt="placeholder"></Image>
        )}
        <Box marginLeft="10px">
          <Title>{`${title} (${new Date(release_date).getFullYear()})`}</Title>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <Overview>Overview</Overview>
          <p>{overview}</p>
          <Genres>Genres</Genres>
          <p>{genresList.join(' ')}</p>
        </Box>
      </Box>
      <MovieAddInfo />
      <Outlet />
      {isLoading && <Loader />}
    </Box>
  );
};
