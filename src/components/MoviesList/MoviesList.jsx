import { List, MovieImg, MovieItem, MovieLink } from './MoviesList.styled';

function MoviesList({ list, location, path = '' }) {
  return (
    <List>
      {list.map(movie => (
        
        <MovieLink to={`${path}${movie.id}`} state={{ from: location }}>
          <MovieItem key={movie.id}>
            {
              <MovieImg
                src="../../images/no_image.jpg"
                width="100"
                alt={movie.title}
              />
            }
            {movie.title}({movie.release_date.slice(0, 4)})
          </MovieItem>
        </MovieLink>
      ))}
    </List>
  );
}

export default MoviesList;
