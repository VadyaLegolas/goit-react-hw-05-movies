import React from 'react';
import { List, MovieImg, MovieItem, MovieLink } from './MoviesList.styled';

function MoviesList({ list, location, path = '' }) {
  return (
    <List>
      {list.map(movie => (
        <MovieLink to={`${path}${movie.id}`} state={{ from: location }}>
          <MovieItem key={movie.id}>
            {
              <MovieImg
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                width="100"
                alt={movie.title}
              />
            }
            {movie.title}
          </MovieItem>
        </MovieLink>
      ))}
    </List>
  );
}

export default MoviesList;
