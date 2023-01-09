import { Box } from 'components/Box';
import { Overview, Genres, Title } from './MovieDescription.styled';

export const MovieDescription = ({ movie }) => {
  const { title, release_date, vote_average, overview, genres } = movie;
  const genresList = genres.map(genre => genre.name);

  return (
    <Box marginLeft="10px">
      <Title>{`${title} (${new Date(release_date).getFullYear()})`}</Title>
      <p>User Score: {Math.round(vote_average * 10)}%</p>
      <Overview>Overview</Overview>
      <p>{overview}</p>
      <Genres>Genres</Genres>
      <p>{genresList.join(' ')}</p>
    </Box>
  );
};
