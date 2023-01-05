import { fetchTrendingMovies } from '../components/API';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        console.log(movies);
        setTrendingMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <ul>
      {trendingMovies.map(movie => (
        <li key={movie.id}>{movie.original_title}</li>
      ))}
    </ul>
  );
};
