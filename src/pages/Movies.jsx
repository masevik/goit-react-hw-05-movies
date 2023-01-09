import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from '../components/Searchbar';
import { fetchSearchMovie } from '../components/API';
import { errorMessage } from '../components/ErrorMessage';
import { Box } from 'components/Box';
import { Loader } from '../components/Loader';
import { SearchedMovies } from '../components/SearchedMovies';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(() =>
    searchParams.get('query')
  );
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const getImages = async () => {
      try {
        setIsLoading(true);
        const movies = await fetchSearchMovie(searchQuery);
        setSearchedMovies(movies.results);
      } catch {
        errorMessage();
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [searchQuery]);

  const onSubmitSearch = query => {
    setSearchQuery(query);
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <Box>
      <Searchbar valueQuery={movieName} onSubmit={onSubmitSearch} />
      <SearchedMovies movies={searchedMovies} />
      {isLoading && <Loader />}
    </Box>
  );
};

export default Movies;