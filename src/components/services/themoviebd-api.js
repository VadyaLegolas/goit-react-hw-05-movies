const API_KEY_ACCESS =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTE1MDIzZDViOWQ3ZWRjMWE4NDhhY2YxODc2YjQ0NSIsInN1YiI6IjY2MGU1N2E5NmRjNTA3MDE2NDU2NGYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7g5_S73d_kmCsOujpak_TASQ3OBWAJbyGG52uGpicY8';

const BASE_URL = 'https://api.themoviedb.org/3/';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + API_KEY_ACCESS,
  },
};

export const GetTrendings = async () => {
  const fetchTrendings = await fetch(`${BASE_URL}trending/movie/day`, options);
  return await fetchTrendings.json();
};

export const SearchMovies = async query => {
  const fetchMovies = await fetch(
    `${BASE_URL}search/movie?include_adult=true&query=${query}`,
    options
  );
  return await fetchMovies.json();
};

export const GetMovieDetails = async movieId => {
  const fetchMoviesDetails = await fetch(`${BASE_URL}movie/${movieId}`, options);
  return await fetchMoviesDetails.json();
};

export const GetMovieCredits = async movieId => {
  const fetchCredits = await fetch(
    `${BASE_URL}movie/${movieId}/credits`,
    options
  );
  return await fetchCredits.json();
};

export const GetMovieReviews = async movieId => {
  const fetchReviews = await fetch(
    `${BASE_URL}movie/${movieId}/reviews`,
    options
  );
  return await fetchReviews.json();
};
