import TokenService from '../services/token-service'
import config from '../config'

const UserCharactersApiService = {
  getCharacters() {
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
        console.log(err)
      })
  }
}

export default UserCharactersApiService