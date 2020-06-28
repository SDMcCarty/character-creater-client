import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


class Header extends Component {

  render() {
    return <>
        <h1 className='header'>
          <Link to='/' className='header-link'>
            Kartara
          </Link>
        </h1>
        <p className='Header__tagline'>Helping Creators Create</p>
    </>
  }
}

export default Header


/**
        <ul>
          <li> <Link to='/login' className='Header__not-logged-in'>Login</Link></li>
          <li> <Link to='/register'>Register</Link></li>
          <li> <Link to='/randomize'>Randomize Character</Link></li>
          <li> <Link to='/character-list'>Character List</Link></li>
          <li> <Link to='/' className='Header__logged-in'>Logout</Link></li>
        </ul>
 */