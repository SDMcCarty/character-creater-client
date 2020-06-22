import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  state = { error: null}
  handleSubmit = (e) => {
    e.preventDefault()

  }

  render() {
    const { error } = this.state
    return (
      <form className='LoginForm' onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Log In</legend>
            <div role='alert'>
              {error && <p className='red'>{error}</p>}
            </div>
          <label htmlFor='LoginForm__username'>User Name</label>
          <input required type='text' name='username' id='LoginForm__username' />
          <label htmlFor='LoginForm__password'>Password</label>
          <input required type='password' name='password' id='LoginForm__password' />
          <Link to='/register'>Not a member? Signup now!</Link>
          <button type='submit'>Sign In</button>
          {/* <Link to='/'><button type='button'>Cancel</button></Link> */}
        </fieldset>
      </form>
    )
  }

}

export default LoginForm