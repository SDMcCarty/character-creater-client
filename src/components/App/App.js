import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Header from '../Header/Header';
import LoginPage from '../../routes/LoginPage';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import RandomizeCharacter from '../RandomizeCharacter/RandomizeCharater';
import CharacterList from '../CharacterList/CharacterList';
import CreateCharacter from '../CreateCharacter/CreateCharacter';
import './App.css'

class App extends Component {
  state = { hasError: false }

  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
          <Switch>
            <Route path='/login'>
              <LoginPage />
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
            <Route  exact path='/create'>
              <CreateCharacter />
            </Route>
            <Route exact path='/'>
              <Link to='/create'><button type='button'>Create Character</button></Link>
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;