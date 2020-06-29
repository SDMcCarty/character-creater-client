import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharacterContext from '../../context/CharacterContext';
import CharacterApiService from '../../services/character-api-service';
import './CharacterList.css';

class CharacterList extends Component {
  static contextType = CharacterContext

  componentDidMount() {
    this.context.clearError()
    CharacterApiService.getCharacters()
    .then(data => {
        console.log('character context si va?')
        CharacterContext.setCharaList(data)
      }).catch(err => 
        CharacterContext.setError(err))
  }

  renderCharacters() {
    const { charaList = [] } = this.context
    return charaList.map(character => 
      <Link key={character.id} to={`/characters/${character.id}`} className='characterList-link'>
        <li className='character-li' id={character.id}>
          <span className='character-name'>Name: {character.first_name} {character.last_name}</span>
          <p className='character-major-trait'>Major Trait: {character.major_trait}</p>
        </li>
      </Link>
    )
  }

  render() {
    const error = this.context
    return (
      <section aria-label='Your character list'>
        <h2 className='page-heading'>Your characters</h2>
          {error 
            ? <p className='red'>There was an error. Please try again</p>
            : this.renderCharacters()}
      </section>
    )
  }
}

export default CharacterList