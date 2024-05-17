import { List, MovieImg, MovieItem, MovieLink } from './MoviesList.styled';
import noImg from '../../images/no_image.jpg';

function MoviesList({ list, location, path = '' }) {
  return (
    <List>
      {list.map(movie => (
        // Ключ перемещен на элемент MovieLink
        <MovieLink key={movie.id} to={${path}${movie.id}} state={{ from: location }}>
          <MovieItem>
            <MovieImg
              // Исправлена интерполяция строки
              src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : noImg}
              width="100"
              // Указан альтернативный текст для изображения
              alt={Poster for ${movie.title}}
            />
            {movie.title}
            {/* Условное отображение года выпуска */}
            {movie.release_date && ` (${movie.release_date.slice(0, 4)})`}
          </MovieItem>
        </MovieLink>
      ))}
    </List>
  );
}

export default MoviesList;
