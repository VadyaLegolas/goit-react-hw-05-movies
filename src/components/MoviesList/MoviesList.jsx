import { List, MovieImg, MovieItem, MovieLink } from './MoviesList.styled';
import noImg from '../../images/no_image.jpg';

function MoviesList({ list, location, path = '' }) {
  return (
    <List>
      {list.map(movie => (
        
        <MovieLink to={`${path}${movie.id}`} state={{ from: location }}>
          <MovieItem key={movie.id}>
            {
              <MovieImg
                src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`: noImg}
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
