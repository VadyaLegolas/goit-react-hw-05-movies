// themoviedb.org API
// Для бекенду використовуй themoviedb.org API. Необхідно зареєструватися (можна ввести довільні дані) та отримати API-ключ. У цій роботі будуть використовуватися наступні ендпоінти.

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

const API_KEY = "2e15023d5b9d7edc1a848acf1876b445"
const API_KEY_ACCESS = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTE1MDIzZDViOWQ3ZWRjMWE4NDhhY2YxODc2YjQ0NSIsInN1YiI6IjY2MGU1N2E5NmRjNTA3MDE2NDU2NGYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7g5_S73d_kmCsOujpak_TASQ3OBWAJbyGG52uGpicY8"

const AccountID = "21183740" 

const BASE_URL = "https://api.themoviedb.org/3/"

const TrandingMovies = "trending/movie/day"
const SearchMovies = "search/movie"
const MovieDetails = "movie/{movie_id}"
const MovieCast = "movie/{movie_id}/credits"
const MovieReviews = "movie/{movie_id}/reviews"

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + API_KEY_ACCESS
    }
  };

  export const  GetTrendings = async () =>{
    const fetchMovies =await fetch(`${BASE_URL}${TrandingMovies}`, options)
    return await fetchMovies.json()
  }
  
