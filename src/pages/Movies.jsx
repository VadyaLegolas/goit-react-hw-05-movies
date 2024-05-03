import { useEffect, useState } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { SearchMovies } from 'components/services/themoviebd-api';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    const fetchMovies = async () => {
      setIsLoading(true);
      setMovies(null);
      setError(null)
      try {
        
        const { results } = await SearchMovies(searchValue);
        if (results.length === 0) {
          throw new Error(`We don't have any movies for this query "${searchValue}"`);
        }
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [searchValue])

  const handleSubmit = e => {
    e.preventDefault();
    let searchQuery = e.target.query.value;
    if (searchQuery.trim() === '') {
      setSearchParams({});
      return;
    }
    setSearchParams({ query: searchQuery });
    e.target.reset();

  };

  return (
    <div>
      <SearchBox onSubmit={handleSubmit} ></SearchBox>
      {isLoading && (
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      )}
      {error && <h2>{error.message}</h2>}

      {movies && (
        <MoviesList list={movies} location={location} />
      )}
    </div>
  );
};

export default Movies;
