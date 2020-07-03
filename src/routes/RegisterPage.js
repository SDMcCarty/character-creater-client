import React, { Component } from 'react'
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'

class RegisterPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  }

  handleRegistrationSuccess = user => {
    //when registration succeeds, redirects to the login page
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className='RegistrationPage'>
        <h2 className='page-heading'>Register</h2>
        <RegistrationForm onRegisterSuccess={this.handleRegistrationSuccess} />
      </section>
    )
  }
}

export default RegisterPage