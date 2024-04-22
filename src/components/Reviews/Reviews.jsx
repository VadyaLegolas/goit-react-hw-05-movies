import { GetMovieReviews } from 'components/services/themoviebd-api';
import { useEffect, useState } from 'react';
import { Comment } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  const [movieReview, setMovieReview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovieReview = async () => {
      try {
        setIsLoading(true);
        const fetchReview = await GetMovieReviews(movieId);
        if (fetchReview.results.length === 0) {
          throw new Error(`We don't have any reviews for this movie`);
        }
        setMovieReview(fetchReview);
      } catch (error) {
        setError(error);
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
        <>
          {console.log(movieReview.results)}
          {movieReview.results.map(element => (
            <li key={element.id}>
              <b>Author: {element.author}</b>
              <p>{element.content}</p>
            </li>
          ))}
        </>
      )}
    </>
  );
};

export default Reviews;
