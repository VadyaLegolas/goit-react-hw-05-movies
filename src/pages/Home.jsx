import { useEffect, useState } from 'react';
import { GetTrendings } from '../components/services/themoviebd-api';
import { useLocation } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import MoviesList from 'components/MoviesList/MoviesList';
export const Home = () => {
  const [trendings, setTrendings] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

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
       <MoviesList list={trendings} location={location} path="movies/" />
      )}
    </>
  );
};
