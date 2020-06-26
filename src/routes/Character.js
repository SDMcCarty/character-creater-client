import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Character extends Component {

  handleClick = (e) => {
    e.preventDefault()
    const characterId = this.props.match.params.character_id
    this.props.deleteCharacter(characterId)
    .then(() => {
      this.props.history.push('/character-list')
    })
  }

  render () {
    let characters = this.props.characters
    if(!characters || !characters.length) {
      return (
        <p className='character-loading'>Loading Character</p>
      )
    } else {
      let id = this.props.match.params.character_id
      // eslint-disable-next-line eqeqeq
      let character = characters.find(chara => chara.id == id)
      
      return (
        <section className='character'>
          <p>Name: {character.first_name} {character.last_name}</p>
          <p>Major Trait: {character.major_trait}</p>
          {/* <Link to='/edit-character'><button type='buttom'>Edit Character</button></Link> */}
          <Link to='/character-list'><button type='button' onClick={this.handleClick}>Delete Character</button></Link>
        </section>
      )

    }

    
  }
}

export default Character