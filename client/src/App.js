import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MoviesList from './component/MoviesList.js';
import MoviesDetails from './component/MoviesDetails.js';
import NavBar from './component/NavBar.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import {getAllMovies} from './action/ActionMovies.js'



const App = () => {
const [totPage,setTotPage] = useState (0);
const apiKey = 'c8d17361de180415e1cb161c9fc45a42';




const searchMovies =async (mot) =>{
  if(mot===""){
    // allMovies();
  }else{
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${mot}&api_key=${apiKey}`);
      // setMovies(res.data.results);
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
      // setMovies(res.data.results);
  } catch (error) {
    console.log('Error lors de la fetching movies !',error)
  }
}


  return (
    <div>
      <NavBar searchMovies={searchMovies}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MoviesList filtrePage={filtrePage}/>} />
          <Route path='/details/:id' element={<MoviesDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App