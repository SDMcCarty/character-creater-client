import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CharacterList.css'

class CharacterList extends Component {

  render() {
    const characters = this.props.characters
    return (
      <section aria-label='Your character list'>
        <h2 className='page-heading'>Your characters</h2>
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
      </section>
    )
  }
}

export default CharacterList