import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class RegistrationFrom extends Component {
  state = { error: null }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSumbit={this.handleSubmit}
      >
        <fieldset>
          <legend>Sign Up</legend>
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
          <label htmlFor='username'>User Name</label>
          <input required type='text' name='username' id='username' />
          <label htmlFor='password'>Password</label>
          <input required type='password' name='password' id='password' />
          <label htmlFor='email'>Email address</label>
          <input required type='email' name='email' id='email' />
          <button type='submit'>Sign Up</button>
          {/* <button type='button'><Link path='/'>Cancel</Link></button> */}
        </fieldset>
      </form>
    )
  }
}

export default RegistrationFrom;