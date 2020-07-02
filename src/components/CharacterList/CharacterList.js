import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharacterContext from '../../context/CharacterContext'
import './CharacterList.css'

class CharacterList extends Component {
  static contextType = CharacterContext

componentDidMount() {
    this.context.fetchCharacters()
  }

  render() {
    const characters = this.context.charaList
    return (
      <section aria-label='Your character list'>
        <h2 className='page-heading'>Your characters</h2>
        <p className='list-intro'>Select a character below to see more information or start creating a new character</p>
        <ul>
          {characters.map(character => 
            <Link key={character.id} to={`/characters/${character.id}`} className='characterList-link'>
              <li className='character-li' id={character.id}>
                <span className='character-name'>Name: {character.first_name} {character.last_name}</span>
                <p className='character-major-trait'>Major Trait: {character.major_trait}</p>
              </li>
            </Link>
          )}
        </ul>
        <Link to='/create' className='create-charater-link'><button type='button' className='create-character-button'>Create Character</button></Link>
      </section>
    )
  }
}

export default CharacterList