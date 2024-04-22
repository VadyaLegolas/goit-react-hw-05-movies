import { useEffect, useState } from 'react';
import { GetTrendings } from '../components/services/themoviebd-api';
import { Link } from 'react-router-dom';
import { List } from './Home.styled';
import { ColorRing } from 'react-loader-spinner';
export const Home = () => {
  const [trendings, setTrendings] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendings = async () => {
      try {
        setIsLoading(true);
        const moviesFetch = await GetTrendings();
        // console.log(moviesFetch.results)
        setTrendings(moviesFetch.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendings();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
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
      {trendings && (
        <List>
          {trendings.map(movie => (
            <Link to={`movies/${movie.id}`}>
              <li key={movie.id}>
                {
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    width="100"
                    alt={movie.title}
                  />
                }{' '}
                {movie.title}
              </li>
            </Link>
          ))}
        </List>
      )}
    </>
  );
};
