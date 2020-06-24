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
    const { history } = this.props
    history.push('/')
  }

  render() {
    return (
      <section className='LoginPage'>
        <h2>Log In</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    )
  }

}

export default LoginPage