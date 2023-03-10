import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '3820fb012ec124360c2ca0b092d22f88';

export async function fetchTrendingMovies() {
  const {
    data: { results },
  } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return results;
}

export async function fetchMovieById(id) {
  const { data } = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
}

export async function fetchActorsById(id) {
  const { data } = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
}

export async function fetchReviewsById(id) {
  const { data } = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return data;
}

export async function fetchSearchMovie(query) {
  const params = {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  };
  const { data } = await axios.get(`search/movie?query=${query}`, params);
  return data;
}
