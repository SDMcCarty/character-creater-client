import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharacterContext from '../context/CharacterContext';

class Character extends Component {

  static contextType = CharacterContext;

  componentDidMount() {
    this.context.fetchCharacters();
  }

  handleClick = (e) => {
    e.preventDefault();
    const characterId = this.props.match.params.character_id;
    this.context.deleteCharacter(characterId)
    .then(() => {
      this.props.history.push('/character-list');
    });
  }

  render () {
    let characters = this.context.charaList;
    if(!characters || !characters.length) {
      return (
        //if no characters fetched
        <p className='character-loading'>Loading Character</p>
      );
    } else {
      let id = this.props.match.params.character_id;
      let character = characters.find(chara => chara.id == id);
      //when there is not a character loaded yet
      if(!character) 
        return <p>Redirecting</p>
      //sets up the character display
      return (
        <section className='character'>
          <p>Name: {character.first_name} {character.last_name}</p>
          <p>Age: {character.age}</p>
          <p>Sex: {character.sex}</p>
          <p>Major Trait: {character.major_trait}</p>
          <p>Motivation: {character.motivation}</p>
          <p>Fear: {character.fear}</p>
          <p>History: {character.history}</p>
          <Link to={`/characters/${character.id}/edit`}><button type='button'>Edit Character</button></Link>
          <Link to='/character-list'><button type='button' onClick={(e) => {if (window.confirm('Are you sure you wish to delete this character?')) this.handleClick(e)}}>Delete Character</button></Link>
        </section>
      );

    }
    
  };
};

export default Character;