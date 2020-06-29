import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
// import TokenService from '../../services/token-service';
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
import './App.css'
// import config from '../../config';


class App extends Component {
  state = { 
    hasError: false
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  // componentDidMount() {
  //   if (TokenService.hasAuthToken()) {
  //     this.setState({ hasError: false })
  //     fetch(`${config.API_ENDPOINT}/characters`, {
  //       headers: {
  //         'authorization': `bearer ${TokenService.getAuthToken()}`
  //       }
  //     })
  //       .then(res => {
  //         if(!res.ok)
  //           return res.json().then(e => Promise.reject(e))
  //         return res.json()
  //       })
  //       .then(data => {
  //         this.setState({ charaList: data })
  //       }).catch(err => {
  //         this.setState({ hasError: err })
  //         console.log(err)
  //       })
  //   }
  // }

  // saveNewCharacter = () => {
  //   return fetch(`${config.API_ENDPOINT}/characters`, {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //       'authorization': `bearer ${TokenService.getAuthToken()}`
  //     },
  //     body: JSON.stringify({
  //       first_name: this.state.newChara.first_name,
  //       last_name: this.state.newChara.last_name,
  //       age: this.state.newChara.age,
  //       sex: this.state.newChara.sex,
  //       major_trait: this.state.newChara.major_trait,
  //       motivation: this.state.newChara.motivation,
  //       fear: this.state.newChara.fear,
  //       history: this.state.newChara.history,
  //       status: "completed"
  //     })
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  //     .then((data) => {
  //       this.setState({
  //         charaList: [ ...this.state.charaList, data ],
  //         newChara: {
  //           first_name: '',
  //           last_name: '',
  //           age: '',
  //           sex: '',
  //           major_event: '',
  //           motivation: '',
  //           fear: '',
  //           status: '',
  //         }
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       this.setState({
  //         hasError: err
  //       })
  //     })
  // }

  // makeNewCharacter = (newCharacterInfo) => {
  //   this.setState({
  //     newChara: {
  //       ...newCharacterInfo
  //     }
  //   })
  // }

  // deleteCharacter = (characterId) => {
  //   return fetch(`${config.API_ENDPOINT}/characters/${characterId}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'content-type': 'application/json',
  //       'authorization': `bearer ${TokenService.getAuthToken()}`
  //     },
  //     body: JSON.stringify({
  //       status: "deleted"
  //     })
  //   })
  //   .then(res => {
  //     if (!res.ok)
  //       return res.json().then(e => Promise.reject(e))
  //     return res.json
  //   })
  //   .then(() => {
  //     this.setState({
  //       // eslint-disable-next-line eqeqeq
  //       charaList: this.state.charaList.filter(chara => chara.id != characterId)
  //     })
  //   })
  //   .catch(err => {
  //     console.log(err)
  //     this.setState({
  //       hasError: err
  //     })
  //   })
  // } 

  // onLogin = () => {
  //   this.setState({ hasError: false })
  //   fetch(`${config.API_ENDPOINT}/characters`, {
  //     headers: {
  //       'authorization': `bearer ${TokenService.getAuthToken()}`
  //     }
  //   })
  //     .then(res => {
  //       if(!res.ok)
  //         return res.json().then(e => Promise.reject(e))
  //       return res.json()
  //     })
  //     .then(data => {
  //       this.setState({ charaList: data })
  //     }).catch(err => {
  //       this.setState({ hasError: err })
  //       console.log(err)
  //     })
  // }

  render() {
    // const { error } = this.state.hasError
    return (
      <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
          {/* {error && <p className='red'>There was an error!</p>} */}
          {this.state.hasError && <p className='red'>There was an error!</p>}
          <Switch>
            {/* <PublicOnlyRoute path='/login' render={routeProps => <LoginPage {...routeProps} onLogin={this.onLogin}/>} /> */}
            <PublicOnlyRoute path='/login' component={LoginPage} />
            <PublicOnlyRoute path='/register' component={RegisterPage} />
            {/* <Route path='/randomize'>
              <RandomizeCharacter />
            </Route> */}
            {/* <PrivateRoute path='/character-list' render={routeProps => <CharacterList {...routeProps} characters={this.state.charaList}/>} />
            <Route  exact path='/create' render={routeProps => <CreateCharacter {...routeProps} makeNewCharacter={this.makeNewCharacter}/>} />
            <PrivateRoute path='/characters/:character_id' render={routeProps => <Character {...routeProps} characters={this.state.charaList} deleteCharacter={this.deleteCharacter}/>}/>
            <Route path='/review-character' render={routeProps => <ReviewCharacter {...routeProps} newCharacter={this.state.newChara} saveNewCharacter={this.saveNewCharacter}/>} /> */}
             <PrivateRoute path='/character-list' component={CharacterList} />
            <Route  exact path='/create' component={CreateCharacter} />
            <PrivateRoute path='/characters/:character_id' component={Character}/>
            <Route path='/review-character' component={ReviewCharacter} />
            <Route exact path='/'>
              <Link to='/create' className='create-charater-link'><button type='button' className='create-character-button'>Create Character</button></Link>
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;