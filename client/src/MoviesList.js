import React from 'react';
import CardMovies from './CardMovies';
import './styles/moviesCard.css'

const MoviesList = ({movies}) => {
  return (
    <div className='MoviesList'>
      {movies.map((movie)=>{
        return(
          <CardMovies  movie={movie} key={movie.id}/>
        )
      })}
    </div>
  )
}

export default MoviesList