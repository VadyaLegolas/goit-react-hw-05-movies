import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';

import { GetTrendings } from '../components/services/themoviebd-api';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendings, setTrendings] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [timeframe, setTimeframe] = useState('day'); // Добавлено состояние для выбора временного интервала
  const location = useLocation();

  useEffect(() => {
    const fetchTrendings = async () => {
      try {
        setIsLoading(true);
        const moviesFetch = await GetTrendings(timeframe); // Обновлен вызов с параметром временного интервала
        setTrendings(moviesFetch.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendings();
  }, [timeframe]); // Обновлен массив зависимостей useEffect

  const handleTimeframeChange = (event) => { // Обработчик изменения временного интервала
    setTimeframe(event.target.value);
  };

  return (
    <>
      <h1>Trending today</h1>
      <div>
        <label>
          Choose timeframe:&nbsp
          <select value={timeframe} onChange={handleTimeframeChange}>
            <option value="day">Day</option>
            <option value="week">Week</option>
          </select>
        </label>
      </div>
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
      {trendings && (
        <MoviesList list={trendings} location={location} path="movies/" />
      )}
    </>
  );
};

export default Home;
