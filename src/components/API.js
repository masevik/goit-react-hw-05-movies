import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingMovies() {
  const API_KEY = '3820fb012ec124360c2ca0b092d22f88';
  const {
    data: { results },
  } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return results;
}
