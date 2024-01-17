import React from 'react';
import CardMovies from './CardMovies';
import { useEffect, useState } from 'react'
import '../styles/moviesCard.css';
import PaginationNav from './PaginationNav';
import {useDispatch,useSelector} from 'react-redux'
import {getAllMovies} from '../action/ActionMovies'


const MoviesList = ({filtrePage}) => {
  const [movies,setMovies] = useState ([]);
  const dispatche = useDispatch ();
  const movieData = useSelector(state=>state.movies)
  useEffect(()=>{
    dispatche(getAllMovies())
  },[])
  useEffect(()=>{
    setMovies(movieData)
  },[movieData])
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