import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import quill from '../../img/quill.png'
import TokenService from '../../services/token-service';


class Header extends Component {
  handleLogoutClick = () => {
    console.log('handleLogoutClick called')
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/login'>
          Log in
        </Link>
        <Link 
          to='/register'>
          Register
        </Link>
      </div>
    )
  }


  render() {
    return (
      <nav className='nav-header'>
        <h1 className='header'>
          <Link to='/' className='header-link'>
            <img src={quill} alt='quill icon' className='icon'/>
            Kartara
          </Link>
        </h1>
        <p className='Header__tagline'>Helping Creators Create</p>
        <span className='log-in-out-route'> {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
        </span>
      </nav>
    )
  }
}

export default Header