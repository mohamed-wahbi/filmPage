import React from 'react';
import './styles/navBar.css'
import { Link } from 'react-router-dom';

const NavBar = ({searchMovies}) => {
  const trouverVideo = (e) =>{
    searchMovies(e.target.value)
  }
  return (
    <div>
      <div className='navBar'>
       <a href='/'> <img src='https://img.freepik.com/premium-vector/movie-media-letter-logo-design-vector-illustration_809852-357.jpg?w=740' alt='logo'/>
        </a>
        <input placeholder='Search...' type='text' onChange={trouverVideo} />

        <a href='/' className='hrefHome'>Home-Movies</a>
       
      </div>
    </div>
  )
}

export default NavBar