import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MoviesList from './MoviesList';
import MoviesDetails from './MoviesDetails.js';
import NavBar from './NavBar';
import {BrowserRouter,Routes,Route, redirect} from 'react-router-dom';




const App = () => {
const [movies,setMovies] = useState ([]);
const [totPage,setTotPage] = useState (0)
const [totFilm,setTotFilm] = useState (0)
const apiKey = 'c8d17361de180415e1cb161c9fc45a42';

useEffect(()=>{
  allMovies();
  
},[])

const allMovies = async()=>{
  
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`);
      setMovies(res.data.results); 
  } catch (error) {
    console.log('Error lors de la fetching movies !',error)
  }
}



const searchMovies =async (mot) =>{
  if(mot===""){
    allMovies();
  }else{
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${mot}&api_key=${apiKey}`);
      setMovies(res.data.results);
      console.log(res.data.total_pages)
      setTotPage(res.data.total_pages)

     
    } catch (error) {
      console.log('Error lors de la recherche des filme !',error)
    }
  }
}

const filtrePage = async(page)=>{
  
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=${apiKey}`);
      setMovies(res.data.results);
  } catch (error) {
    console.log('Error lors de la fetching movies !',error)
  }
}


  return (
    <div>
      <NavBar searchMovies={searchMovies}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MoviesList totFilm={totFilm} movies={movies} totPage={totPage} filtrePage={filtrePage}/>} />
          <Route path='/details/:id' element={<MoviesDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App