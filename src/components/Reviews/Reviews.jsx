import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Comment } from 'react-loader-spinner';

import { GetMovieReviews } from 'components/services/themoviebd-api';

const Reviews = () => {
  const { movieId } = useParams();

  const [movieReview, setMovieReview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Изменено на null для начального состояния

  useEffect(() => {
    const fetchMovieReview = async () => {
      try {
        setIsLoading(true);
        const fetchReview = await GetMovieReviews(movieId);
        if (fetchReview.results.length === 0) {
          throw new Error("We don't have any reviews for this movie"); // Исправлено на строку в кавычках
        }
        setMovieReview(fetchReview);
      } catch (error) {
        setError(error); // Установка объекта ошибки
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReview();
  }, [movieId]);

  return (
    <>
      {isLoading && (
        <h2>
          <Comment
            visible={true}
            height="80"
            width="80"
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass="comment-wrapper"
            color="#fff"
            backgroundColor="#F4442E"
          />
        </h2>
      )}
      {error && <p>{error.message}</p>}
      {movieReview && (
        <ul> {/* Обертка в список */}
          {movieReview.results.map(element => (
            <li key={element.id}>
              <b>Author: {element.author}</b>
              <p>{element.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
