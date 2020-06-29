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
    // this.props.onLogin()
    const { history } = this.props
    history.push('/')
  }

  render() {
    console.log(this.props)
    return (
      <section className='LoginPage'>
         <h2 className='page-heading'>Log in</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    )
  }

}

export default LoginPage