import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CharacterSmall extends Component {

  render() {
    return (
      // <Link to={`character/${:character.id}`} className='Character'>
      <Link to='/characterId'>
        <li className='character-snapshot'>
          <h2 className='character-name'>Character Name</h2>
          <h3 className='character-event'>Main Event</h3>
        </li>
      </Link>
    )
  }
}

export default CharacterSmall