import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MoviesList from './MoviesList';
import NavBar from './NavBar';



const App = () => {
const [movies,setMovies] = useState ([]);
const [totPage,setTotPage] = useState (0)
const apiKey = 'c8d17361de180415e1cb161c9fc45a42';

const allMovies = async()=>{
  
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`);
      setMovies(res.data.results);
      setTotPage(res.data.total_pages)
      
  } catch (error) {
    console.log('Error lors de la fetching movies !',error)
  }
}

useEffect(()=>{
  allMovies();
},[])

const searchMovies =async (mot) =>{
  if(mot===""){
    allMovies();
  }else{
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${mot}&api_key=${apiKey}`);
      setMovies(res.data.results);
      console.log(res.data.results)
    } catch (error) {
      console.log('Error lors de la recherche des filme !',error)
    }
  }
}

const filtrePage = async(page)=>{
  
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=${apiKey}`);
      setMovies(res.data.results);
      console.log(res.data.results)
  } catch (error) {
    console.log('Error lors de la fetching movies !',error)
  }
}


  return (
    <div>
      <NavBar searchMovies={searchMovies}/>
      <MoviesList movies={movies} totPage={totPage} filtrePage={filtrePage}/>
    </div>
  )
}

export default App