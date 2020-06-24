import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CharacterSummary extends Component {

  makeLis() {
    console.log(this.props.characters)

    let characters = this.props.characters.charaList
    console.log('characters', characters)
    return characters
  }


  render() {
    console.log(this.props)
    return (
      <ul>
        {this.makeLis}
      </ul>
      // <Link to={`character/${:character.id}`} className='Character'>
      // <Link to='/characterId'>
      //   <li className='character-snapshot'>
      //     <h2 className='character-name'>Character Name</h2>
      //     <h3 className='character-event'>Main Event</h3>
      //   </li>
      // </Link>
    )
  }
}

export default CharacterSummary