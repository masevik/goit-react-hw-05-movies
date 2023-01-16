import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieById } from '../../services/API';
import { Box } from 'components/Box';
import { Loader } from '../../components/Loader';
import { errorMessage } from '../../services/ErrorMessage';
import { BackLink } from '../../components/BackLink';
import { MovieAddInfo } from '../../components/MovieAddInfo';
import { Image } from './MovieDetails.styled';
import placeholder from '../../images/coverPlaceholder.jpg';
import { MovieDescription } from '../../components/MovieDescription';
import { Suspense } from 'react';

const MoviesDetails = () => {
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

  const { poster_path, title } = movie;
  const src = `https://image.tmdb.org/t/p/w200/${poster_path}`;
  const alt = `poster ${title}`;

  return (
    <Box paddingLeft="16px" paddingRight="16px" paddingTop="10px">
      <BackLink to={backLinkHref}>Go back</BackLink>
      <Box
        display="flex"
        marginTop="10px"
        borderBottom="1px solid #3f51b5"
        marginBottom="10px"
        height="auto"
      >
        <Box display="block">
          {poster_path ? (
            <Image src={src} alt={alt} />
          ) : (
            <Image src={placeholder} alt="placeholder" />
          )}
        </Box>
        <MovieDescription movie={movie} />
      </Box>
      <MovieAddInfo />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      {isLoading && <Loader />}
    </Box>
  );
};

export default MoviesDetails;
