import { fetchTrendingMovies } from '../components/API';
import { useState, useEffect } from 'react';
import { TrendingMovies } from 'components/TrendingMovies';
import { Box } from 'components/Box';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <Box paddingLeft="16px" paddingRight="16px" paddingTop="10px">
      <h2>Trending today</h2>
      <TrendingMovies movies={trendingMovies} />
    </Box>
  );
};
