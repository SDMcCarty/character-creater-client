import React from 'react';
import { Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import RandomizeCharacter from '../RandomizeCharacter/RandomizeCharater';
import CharacterList from '../CharacterList/CharacterList';
import CharacterSmall from '../CharacterSmall/CharacterSmall';
import CreateCharacter from '../CreateCharacter/CreateCharacter';

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
      {/* <CharacterSmall /> */}
      {/* <Route to='/create'>
        <button type='button'>
          Create Character
          <CreateCharacter />
        </button>
      </Route> */}
      <Route path='/create'>
        <CreateCharacter />
      </Route>
      {/* <Link to='/create'><button type='button'>Create Character</button></Link> */}
    </main>
  );
}

export default App;