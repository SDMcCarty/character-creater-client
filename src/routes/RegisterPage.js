import React, { Component } from 'react'
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'

class RegisterPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className='RegistrationPage'>
        <h2>Register</h2>
        <RegistrationForm onRegisterationSuccess={this.handleRegistrationSuccess} />
      </section>
    )
  }
}

export default RegisterPage