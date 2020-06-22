import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import RandomizeCharacter from '../RandomizeCharacter/RandomizeCharater';
import CharacterList from '../CharacterList/CharacterList';

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
          <RegistrationForm />
        </Route>
        <Route path='/randomize'>
          <RandomizeCharacter />
        </Route>
        <Route path='/character-list'>
          <CharacterList />
        </Route>
      </header>
    </main>
  );
}

export default App;