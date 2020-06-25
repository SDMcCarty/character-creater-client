import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './CharacterList.css'

class CharacterList extends Component {

  state = {
    // id: null,
    // first_name: '',
    // last_name: '',
    // major_trait: '',
    charaList: []
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
        console.log(err)
      })
  }

  render() {
    console.log(this.state)
    const characters = this.state.charaList
    console.log(characters)
    return (
      <ul>
        {characters.map(character => 
            <Link key={character.id} to='/{character.id}' className='characterList-link'>
            <li className='character-li' id={character.id}>
              <span className='character-name'>Name: {character.first_name} {character.last_name}</span>
              <p className='character-major-trait'>Major Trait: {character.major_trait}</p>
            </li>
          </Link>
        )}
      </ul>
    )
  }
}

export default CharacterList