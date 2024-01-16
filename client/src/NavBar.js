import React from 'react';
import './styles/navBar.css'

const NavBar = () => {
  return (
    <div>
      <div className='navBar'>
        <img src='https://img.freepik.com/premium-vector/movie-media-letter-logo-design-vector-illustration_809852-357.jpg?w=740' alt='logo'/>
        <input placeholder='Search...' type='text' />
      </div>
    </div>
  )
}

export default NavBar