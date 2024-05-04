import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Blocks } from 'react-loader-spinner';
import { GetMovieCredits } from 'components/services/themoviebd-api';
import noImg from '../../images/1716bf8da8ff566983fca0387acc8d35.png';

const Cast = () => {
  const { movieId } = useParams();

  const [movieCast, setMovieCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const fetchCast = await GetMovieCredits(movieId);
        setMovieCast(fetchCast);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      {isLoading && (
        <h2>
          <Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
          />
        </h2>
      )}
      {error && <h2>{error.message}</h2>}
      {movieCast && (
        <>
          {movieCast.cast.length === 0 ? (
            <p>We don't have any cast for this movie</p>
          ) : (
            movieCast.cast.map(element => {
              return (
                <>
                  <img
                    src={
                      element.profile_path
                        ? `https://image.tmdb.org/t/p/w500${element.profile_path}`
                        : noImg
                    }
                    width="100"
                    alt={element.name}
                  />
                  <h3>{element.name}</h3>
                  <p>
                    <b>Character:</b> {element.character}
                  </p>
                </>
              );
            })
          )}
        </>
      )}
    </>
  );
};

export default Cast;
