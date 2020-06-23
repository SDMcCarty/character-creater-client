import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


class Header extends Component {

  render() {
    return <>
      <nav className='Header'>
        <h1>
          <Link to='/'>
            Character Creater
          </Link>
        </h1>
        <span className='Header__tagline'>Character Creation Made Simple</span>
        <Link to='/login' className='Header__not-logged-in'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/randomize'>Randomize Character</Link>
        <Link to='/character-list'>Character List</Link>
        <Link to='/' className='Header__logged-in'>Logout</Link>
      </nav>
    </>
  }
}

export default Header