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
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <>
        <h2>Log In</h2>
        <LoginForm onsuccess={this.handleLoginSuccess} />
      </>
    )
  }

}

export default LoginPage