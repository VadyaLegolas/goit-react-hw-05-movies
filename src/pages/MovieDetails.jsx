import { GetMovieDetails } from 'components/services/themoviebd-api';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Div } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();

  console.log(movieId);

  const [movieDetail, setMovieDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const moviesFetch = await GetMovieDetails(movieId);
        // console.log(moviesFetch.results)
        setMovieDetail(moviesFetch);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);
  console.log(movieDetail);
  return (
    <>
      <h1>Movie details</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {movieDetail && (
        <>
          <Div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
              width="300"
              alt={MovieDetails.title}
            />
            <div>
              <h2>
                {movieDetail.original_title} (
                {movieDetail.release_date.slice(0, 4)})
              </h2>
              <p>User score: {Math.round(movieDetail.vote_average * 10)}%</p>
              <h3>Overview:</h3>
              <p>{movieDetail.overview}</p>
              <h3>Genres:</h3>
              <p>{movieDetail.genres.map(element => element.name + ' ')}</p>
            </div>
          </Div>
          <hr />
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default MovieDetails;
