import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '31f0c221a6a4c16d94ce50023b58333b';

export async function getTrendingMovies() {
  const res = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return res.data.results;
}

export async function getMoviesByQuery(query) {
  const res = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return res.data.results;
}

export async function getMovieById(movieId) {
  const res = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return res.data;
}

export async function getMovieCast(movieId) {
  const res = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return res.data.cast;
}

export async function getMovieReviews(movieId) {
  const res = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return res.data.results;
}
