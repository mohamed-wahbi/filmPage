import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MoviesList from './MoviesList';



const App = () => {
const [movies,setMovies] = useState ([]);
const apiKey = 'c8d17361de180415e1cb161c9fc45a42';

const allMovies = async()=>{
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`);
    setMovies(res.data.results);
    console.log(res.data.results)

  } catch (error) {
    console.log('Error lors de la fetching movies !',error)
  }
}

useEffect(()=>{
  allMovies();
},[])



  return (
    <div>
      <MoviesList movies={movies}/>
    </div>
  )
}

export default App