import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationFrom from '../RegistrationForm/RegistrationForm';

function App() {
  return (
    <main className='App'>
      <header className='App__header'>
        <Route path='/'>
          <Header />
        </Route>
        <Route path='/login'>
          <LoginForm />
        </Route>
        <Route path='/register'>
          <RegistrationFrom />
        </Route>
      </header>
    </main>
  );
}

export default App;