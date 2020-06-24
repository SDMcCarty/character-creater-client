import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null}

  handleSubmitJwtAuth = (e) => {
    e.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = e.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })

  }

  render() {
    const { error } = this.state
    return (
      <form className='LoginForm' onSubmit={this.handleSubmitJwtAuth}>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <fieldset>
          <legend>Log In</legend>
          <label htmlFor='LoginForm__user_name'>User Name</label>
          <input required type='text' name='user_name' id='LoginForm__user_name' />
          <label htmlFor='LoginForm__password'>Password</label>
          <input required type='password' name='password' id='LoginForm__password' />
          <Link to='/register'>Not a member? Signup now!</Link>
          <button type='submit'>Log In</button>
          {/* <Link to='/'><button type='button'>Cancel</button></Link> */}
        </fieldset>
      </form>
    )
  }

}

export default LoginForm