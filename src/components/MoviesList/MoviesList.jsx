import React from 'react'
import { List } from './MoviesList.styled'
import { Link } from 'react-router-dom'

function MoviesList({list, location, path=''}) {
  return (
    <List>
    {list.map(movie => (
      <Link to={`${path}${movie.id}`} state={ {from: location }}>
        <li key={movie.id}>
          {
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              width="100"
              alt={movie.title}
            />
          }{' '}
          {movie.title}
        </li>
      </Link>
    ))}
  </List>
  )
}

export default MoviesList
