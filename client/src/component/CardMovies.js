import React from 'react';
import '../styles/cardMovies.css';
import { Link } from 'react-router-dom';

const CardMovies = ({movie}) => {
  return (
    <div className='allPosterCard'>
      
        <Link to={`details/${movie.id}`}>
      <div className='posterCard'>
        <img  src={'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path} alt='PosterImg'/>
        <div className='posterCardInfo'>
          <p>Title : {movie.original_title}</p>
          <p>Date de creation : {movie.release_date}</p>
          <p>Popularity : {movie.popularity}</p>
        </div>
        
      </div>
      </Link>

      </div>
  )
}

export default CardMovies