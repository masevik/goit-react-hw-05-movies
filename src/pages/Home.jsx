import { fetchTrendingMovies } from '../services/API';
import { useState, useEffect } from 'react';
import { MoviesList } from '../components/MoviesList';
import { Loader } from '../components/Loader';
import { errorMessage } from '../services/ErrorMessage';
import { Box } from 'components/Box';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch {
        errorMessage();
      } finally {
        setIsLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <Box paddingLeft="16px" paddingRight="16px" paddingTop="10px">
      <h2>Trending today</h2>
      <MoviesList movies={trendingMovies} />
      {isLoading && <Loader />}
    </Box>
  );
};

export default Home;
