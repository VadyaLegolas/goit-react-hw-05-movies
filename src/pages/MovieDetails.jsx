import { GetMovieDetails } from 'components/services/themoviebd-api';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { BackLink, Div, Img } from './MovieDetails.styled';
import { ColorRing } from 'react-loader-spinner';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const [movieDetail, setMovieDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const moviesFetch = await GetMovieDetails(movieId);
        setMovieDetail(moviesFetch);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);
  return (
    <>
      <h1>Movie details</h1>
      <p>
        <BackLink to={backLinkLocationRef.current}>↩ Go back</BackLink>
      </p>
      {isLoading && (
        <h2>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </h2>
      )}
      {error && <h2>{error.message}</h2>}
      {movieDetail && (
        <>
          <Div>
            <Img
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
          <hr />
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
