import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';


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

  makeLis = () => {
    let characters = this.state.charaList.map(chara => {
      return `<Link to='/:character_id'>
               <li className='character-snapshot'>
                 <h2 className='character-name'>${chara.first_name} ${chara.last_name}</h2>
                 <h3 className='character-major-trait'>${chara.major_trait}</h3>
               </li>
             </Link>`
        })
    console.log(characters)
    return characters
        
    };
    // <Link to={`character/${:character.id}`} className='Character'>
      // <Link to='/characterId'>
      //   <li className='character-snapshot'>
      //     <h2 className='character-name'>Character Name</h2>
      //     <h3 className='character-event'>Main Event</h3>
      //   </li>
      // </Link>
  

  render() {
    console.log(this.state)
    const characters = this.state.charaList
    console.log(characters)
    return (
      <>
        {characters.map(character => 
          <ul>
            <Link to='/{character.id}'>
            <li key={character.id} className='character-li' id={character.id}>
              <span className='character-name'>Name: {character.first_name} {character.last_name}</span>
              <p className='character-major-trait'>Major Trait: {character.major_trait}</p>
            </li>
          </Link>
          </ul>
        )}
      </>
    )
  }
}

export default CharacterList