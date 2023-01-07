import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieById } from '../components/API';
import { Box } from 'components/Box';

export const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    const getMovieById = async id => {
      if (id === undefined) {
        return;
      }

      try {
        const movie = await fetchMovieById(id);
        setMovie(movie);
        console.log(movie);
      } catch (error) {
        console.log(error);
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
      <button type="button">Go back</button>
      <Box display="flex" marginTop="10px">
        <img
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={`poster ${title}`}
        ></img>
        <div>
          <h2>{`${title} (${new Date(release_date).getFullYear()})`}</h2>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <p>Overview</p>
          <p>{overview}</p>
          <p>Genres</p>
          <p>{genresList.join(' ')}</p>
        </div>
      </Box>
    </Box>
  );
};
