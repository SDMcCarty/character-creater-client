import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './RandomizeCharacter.css'

class RandomizeCharacter extends Component {

  render() {
    return (
      <>
        <p>Saved characters can be edited later</p>
        <section class="character">
          <p>Name: [Randomized Initials]</p>
          <p>Major Event: [Randomized Event]</p>
        </section>

        <Link path='/character-list'><button type="submit">Save Character</button></Link>
        <Link path='/create'><button type="button">Delete and start again</button></Link>
        <Link path='/randomize'><button type="button">Randomize Character</button></Link>
      </>
    )
  }
}

export default RandomizeCharacter