import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import { Link } from 'react-router-dom';
import './LoginForm.css';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null};

  handleSubmitJwtAuth = e => {
    e.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = e.target;

    //logs in user
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className='LoginForm' onSubmit={this.handleSubmitJwtAuth}>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
          <label htmlFor='LoginForm__user_name'>User Name</label>
          <input required type='text' name='user_name' id='LoginForm__user_name' />
          <label htmlFor='LoginForm__password'>Password</label>
          <input required type='password' name='password' id='LoginForm__password' />
          <Link to='/register' className='login-link'>Not a member? Signup now!</Link>
          <button type='submit'>Log In</button>
          <Link to='/'><button type='button'>Cancel</button></Link>
      </form>
    );
  };
};

export default LoginForm;