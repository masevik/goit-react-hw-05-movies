import { fetchTrendingMovies } from '../components/API';
import { useState, useEffect } from 'react';
import { TrendingMovies } from 'components/TrendingMovies';

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

  return <TrendingMovies movies={trendingMovies} />;
};
