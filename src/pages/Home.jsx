import { fetchTrendingMovies } from '../components/API';
import { useState, useEffect } from 'react';
import { TrendingMovies } from 'components/TrendingMovies';
import { Loader } from '../components/Loader';
import { errorMessage } from '../components/ErrorMessage';
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
      <TrendingMovies movies={trendingMovies} />
      {isLoading && <Loader />}
    </Box>
  );
};

export default Home;
