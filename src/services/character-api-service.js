import TokenService from './token-service'
import config from '../config'
import CharacterContext from '../context/CharacterContext'

const UserCharactersApiService = {
  getCharacters() {
    return fetch(`${config.API_ENDPOINT}/characters`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        console.log(CharacterContext)
        if(!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      // .then(data => {
      //   console.log('character context si va?')
      //   CharacterContext.setCharaList(data)
      // }).catch(err => 
      //   CharacterContext.setError(err))
      // .then(data => {
      //   console.log(data)
      //   this.setState({ charaList: data })
      // }).catch(err => {
      //   console.log(err)
      // })
  },

  // getCharacter(characterId) {
  //   return fetch()
  // }
}

export default UserCharactersApiService