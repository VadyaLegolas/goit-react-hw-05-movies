import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';

import { GetMovieDetails } from 'components/services/themoviebd-api';
import { BackLink, Div, Img } from './MovieDetails.styled';
import noImg from '../images/No-Image-Placeholder.svg.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const [movieDetail, setMovieDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Изменено на null

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
        <div className="loader">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      )}
      {error && <h2>Something went wrong: {error.message}</h2>}
      {movieDetail && (
      <>
        <Div>
          <Img
            src={
              movieDetail.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`
                : noImg
            }
            width="300"
            alt={movieDetail.original_title || 'No image available'} // Исправлено на movieDetail.original_title
          />
          <div>
            <h2>
              {movieDetail.original_title}{' '}
              {movieDetail.release_date
                ? `(${movieDetail.release_date.slice(0, 4)})`
                : ''}
            </h2>
            <p>User score: {Math.round(movieDetail.vote_average * 10)}%</p>
            <h3>Overview:</h3>
            <p>{movieDetail.overview || 'No description'}</p>
            <h3>Genres:</h3>
            <p>
              {movieDetail.genres.length > 0
                ? movieDetail.genres.map(genre => genre.name).join(', ')
                : 'No genres'}
            </p>
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
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
      </>
      )}
    </>
  );
};

export default MovieDetails;
