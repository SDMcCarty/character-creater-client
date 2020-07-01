import TokenService from '../services/token-service'
import config from '../config'

const UserCharactersApiService = {
  getCharacters() {
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
        console.log(err)
      })
  }
}

export default UserCharactersApiService