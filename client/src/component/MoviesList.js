import React from 'react';
import CardMovies from './CardMovies';
import '../styles/moviesCard.css';
import PaginationNav from './PaginationNav';

const MoviesList = ({movies,filtrePage,totPage}) => {
  return (
    <div className='MoviesList'>
      {movies.map((movie)=>{
        return(
          <CardMovies  movie={movie} key={movie.id}/>
        )
      })}
      <PaginationNav filtrePage={filtrePage}/>
    </div>
  )
}

export default MoviesList