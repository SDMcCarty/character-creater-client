import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import Header from '../Header/Header';
import LoginPage from '../../routes/LoginPage';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import RandomizeCharacter from '../RandomizeCharacter/RandomizeCharater';
import CharacterList from '../CharacterList/CharacterList';
import Character from '../../routes/Character';
import CreateCharacter from '../CreateCharacter/CreateCharacter';
import ReviewCharacter from '../ReviewCharacter/Review-Character'
import './App.css'

class App extends Component {
  state = { 
    charaList: [],
    newChara: 
      {
        first_name: 'Thim',
        last_name: 'Tham',
        major_trait: 'Smol'
      },
    hasError: false
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/characters', {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        if(!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(data => {
        console.log(data)
        this.setState({ charaList: data })
      }).catch(err => {
        this.setState({ hasError: err })
        console.log(err)
      })
  }

  saveNewCharacter = () => {
    fetch('http://localhost:8000/api/characters', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken}`
      },
      body: JSON.stringify({
        first_name: this.state.newCharacter.first_name,
        last_name: this.state.newCharacter.last_name,
        major_trait: this.state.newCharacter.major_trait,
        status: 'completed'
      })
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(() => {
        this.setState({
          newChara: {
            first_name: '',
            last_name: '',
            major_event: ''
          }
        })

      })
      .catch(err => 
        this.setState({
          hasError: err
        })
      )
  }



  render() {
    console.log(this.state)
    let value = {
      state: this.state,
      saveNewCharacter: this.saveNewCharacter
    }
    console.log(value)
    console.log(this.state.newChara)
    return (
      <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
          <Switch>
            <Route path='/login' component={LoginPage} />
            <Route path='/register'>
              <RegistrationForm />
            </Route>
            <Route path='/randomize'>
              <RandomizeCharacter />
            </Route>
            <Route path='/character-list'>
              <CharacterList />
            </Route>
            <Route  exact path='/create' component={CreateCharacter} />
            <Route path='/characters/:character_id' component={Character} />
            <Route path='/review-character' render={routeProps => <ReviewCharacter {...routeProps} newCharacter={this.state.newChara} saveNewCharacter={this.saveNewCharacter}/>} />
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