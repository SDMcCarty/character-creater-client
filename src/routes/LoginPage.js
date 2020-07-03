import React, { Component } from 'react';
import LoginForm from  '../components/LoginForm/LoginForm';

class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    //when log in succeeds, redirects to user's character list
    const { history } = this.props
    history.push('/character-list')
  }

  render() {
    return (
      <section className='LoginPage'>
         <h2 className='page-heading'>Log in</h2>
         <p className='login-welcome'>Welcome back</p>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    )
  }

}

export default LoginPage