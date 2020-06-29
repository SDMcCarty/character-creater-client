import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service'

class RegistrationFrom extends Component {
  static defaultProps = {
    onRegistartionSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = (e) => {
    e.preventDefault()
    const { user_name, password, email } = e.target

    this.setState({ error: null })
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      email: email.value
    })
    .then(user => {
      user_name.value = ''
      password.value = ''
      email.value = ''
      this.props.onRegisterSuccess()
    })
    .catch(res => {
      console.log(res.error)
      this.setState({ error: res.error })
    })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
          <label htmlFor='RF__user_name'>User Name</label>
          <input 
            required 
            type='text' 
            name='user_name' 
            id='user_name' 
          />
          <label htmlFor='RF__password'>Password</label>
          <input 
            required 
            type='password' 
            name='password' 
            id='password' 
          />
          <label htmlFor='RF__email'>Email address</label>
          <input 
            required 
            type='email' 
            name='email' 
            id='email' 
          />
          <button type='submit'>Sign Up</button>
      </form>
    )
  }
}

export default RegistrationFrom;