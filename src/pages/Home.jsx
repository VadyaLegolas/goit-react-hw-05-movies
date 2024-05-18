import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';

import { GetTrendings } from '../components/services/themoviebd-api';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendings, setTrendings] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Изменено на null
  const location = useLocation();

  useEffect(() => {
    const fetchTrendings = async () => {
      try {
        setIsLoading(true);
        const moviesFetch = await GetTrendings();
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
        <div className="loader"> {/* Обертка для стилизации */}
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
      {error && <h2>Something went wrong: {error.message}</h2>} {/* Дружелюбное сообщение об ошибке */}
      {trendings && (
        <MoviesList list={trendings} location={location} path="movies/" />
      )}
    </>
  );
};

export default Home;
