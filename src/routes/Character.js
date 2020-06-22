import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Character extends Component {

  render () {
    return (
      <section className='character'>
        <p>Name: CharacterName</p>
        <p>Major Event: Event</p>
        <Link to='/edit-character'><button type='buttom'>Edit Character</button></Link>
        <Link to='/character-list'><button type='button'>Delete Character</button></Link>
      </section>
    )
  }
}

export default Character