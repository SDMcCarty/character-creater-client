import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import Header from '../Header/Header';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import LoginPage from '../../routes/LoginPage';
import RegisterPage from '../../routes/RegisterPage';
// import RandomizeCharacter from '../RandomizeCharacter/RandomizeCharater';
import CharacterList from '../CharacterList/CharacterList';
import Character from '../../routes/Character';
import CreateCharacter from '../CreateCharacter/CreateCharacter';
import ReviewCharacter from '../ReviewCharacter/Review-Character'
import CharacterContext from '../../context/CharacterContext'
import './App.css'
import config from '../../config';


class App extends Component {
  state = { 
    charaList: [],
    newChara: {},
    hasError: false
  }

  fetchCharacters = () => {
      this.setState({ hasError: false })
      fetch(`${config.API_ENDPOINT}/characters`, {
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
          this.setState({ charaList: data })
        }).catch(err => {
          this.setState({ hasError: err })
          console.log(err)
        })
  }

  saveNewCharacter = () => {
    return fetch(`${config.API_ENDPOINT}/characters`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        first_name: this.state.newChara.first_name,
        last_name: this.state.newChara.last_name,
        age: this.state.newChara.age,
        sex: this.state.newChara.sex,
        major_trait: this.state.newChara.major_trait,
        motivation: this.state.newChara.motivation,
        fear: this.state.newChara.fear,
        history: this.state.newChara.history,
        status: "completed"
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then((data) => {
        this.setState({
          charaList: [ ...this.state.charaList, data ],
          newChara: {
            first_name: '',
            last_name: '',
            age: '',
            sex: '',
            major_event: '',
            motivation: '',
            fear: '',
            status: '',
          }
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          hasError: err
        })
      })
  }

  setNewCharacter = (newCharacterInfo) => {
    this.setState({
      newChara: {
        ...newCharacterInfo
      }
    })
  }

  deleteCharacter = (characterId) => {
    return fetch(`${config.API_ENDPOINT}/characters/${characterId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        status: "deleted"
      })
    })
    .then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return res.json
    })
    .then(() => {
      this.setState({
        // eslint-disable-next-line eqeqeq
        charaList: this.state.charaList.filter(chara => chara.id != characterId)
      })
    })
    .catch(err => {
      console.log(err)
      this.setState({
        hasError: err
      })
    })
  }  

  render() {
    const { error } = this.state.hasError
    return (
      <CharacterContext.Provider value={{
        charaList: this.state.charaList,
        newChara: this.state.newChara,
        fetchCharacters: this.fetchCharacters,
        setNewCharacter: this.setNewCharacter,
        saveNewCharacter: this.saveNewCharacter,
        deleteCharacter: this.deleteCharacter,
      }}>
        <div className='App'>
          <header className='App__header'>
            <Route component={Header} />
          </header>
          <main className='App__main'>
            {error && <p className='red'>There was an error!</p>}
            <Switch>
              {/* <Route path='/login' render={routeProps => <LoginPage {...routeProps} onLogin={this.onLogin}/>} /> */}
              <PublicOnlyRoute path='/login' component={LoginPage} />
              <PublicOnlyRoute path='/register' component={RegisterPage} />
              {/* <Route path='/randomize'>
                <RandomizeCharacter />
              </Route> */}
              <PrivateRoute path='/character-list' component={CharacterList} />
              <PrivateRoute  exact path='/create' component={CreateCharacter} />
              <PrivateRoute path='/characters/:character_id' component={Character} />
              <PrivateRoute path='/review-character' component={ReviewCharacter} />
              <Route exact path='/'>
                <h2 className='page-heading intro-heading'>• Welcome to Kartara •</h2>
                <p className='intro'>Kartara is an app designed to help creators fully visualize their characters. Click 'Create Character' to start crafting the characters of your dreams</p>
                <Link to='/create' className='create-charater-link'><button type='button' className='create-character-button'>Create Character</button></Link>
              </Route>
            </Switch>
          </main>
        </div>
      </CharacterContext.Provider>
    );
  }
}

export default App;