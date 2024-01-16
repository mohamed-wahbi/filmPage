import React from 'react';
import ('./styles/cardMovies.css');

const CardMovies = ({movie}) => {
  return (
    <div className='allPosterCard'>
      
        
      <div className='posterCard'>
        <img  src={'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path} alt='PosterImg'/>
        <div className='posterCardInfo'>
          <p>Title : {movie.original_title}</p>
          <p>Date de creation : {movie.release_date}</p>
          <p>Popularity : {movie.popularity}</p>
        </div>
        
      </div>

      </div>
  )
}

export default CardMovies