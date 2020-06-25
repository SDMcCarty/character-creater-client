import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Character extends Component {

  render () {
    console.log('characters', this.props.characters)
    console.log(this.props)
    console.log(this.props.match.params.character_id)
    let characters = this.props.characters
    if(!characters || !characters.length) {
      return (
        <p>Loading Character</p>
      )
    } else {
      console.log(characters)
      console.log(characters.filter(chara => chara.id === this.props.match.params.character_id))
      let id = this.props.match.params.character_id
      console.log(id)
      // eslint-disable-next-line eqeqeq
      let character = characters.find(chara => chara.id == id)
      console.log(character)

      return (
        <section className='character'>
          <p>Name: {character.first_name} {character.last_name}</p>
          <p>Major Trait: {character.major_trait}</p>
          {/* <Link to='/edit-character'><button type='buttom'>Edit Character</button></Link> */}
          {/* <Link to='/character-list'><button type='button'>Delete Character</button></Link> */}
        </section>
      )

    }

    
  }
}

export default Character