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
    newChara: {},
    hasError: false
  }

  componentDidMount() {
    //probs need if logged in logic
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
    console.log('saveNewCharacter has been called')
    fetch('http://localhost:8000/api/characters', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        first_name: this.state.newChara.first_name,
        last_name: this.state.newChara.last_name,
        major_trait: this.state.newChara.major_trait,
        status: "completed"
      })
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json().then(console.log)
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
      .then(() => {
        this.history.push('/review-character')
      })
      .catch(err => {
        console.log(err)
        this.setState({
          hasError: err
        })
      })
  }

  makeNewCharacter = (newCharacterInfo) => {
    console.log(newCharacterInfo)
    this.setState({
      newChara: {
        ...newCharacterInfo
      }
    })
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
            <Route  exact path='/create' render={routeProps => <CreateCharacter {...routeProps} makeNewCharacter={this.makeNewCharacter}/>}/>
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