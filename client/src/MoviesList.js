import React from 'react';
import CardMovies from './CardMovies';
import './styles/moviesCard.css';
import PaginationNav from './PaginationNav';

const MoviesList = ({movies,filtrePage,totPage,totFilm}) => {
  return (
    <div className='MoviesList'>
      {movies.map((movie)=>{
        return(
          <CardMovies  movie={movie} key={movie.id}/>
        )
      })}
      <PaginationNav movies={movies} totFilm={totFilm} totPage={totPage} filtrePage={filtrePage}/>
    </div>
  )
}

export default MoviesList