import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './RandomizeCharacter.css'

class RandomizeCharacter extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <>
        <p>Saved characters can be edited later</p>
        <section class='character'>
          <p>Name: [Randomized Initials]</p>
          <p>Major Event: [Randomized Event]</p>
        </section>

        <Link to='/character-list'><button type='submit' onSubmit={this.handleSubmit}>Save Character</button></Link>
        <Link to='/create'><button type='button'>Delete and start again</button></Link>
        <Link to='/randomize'><button type='button'>Randomize Character</button></Link>
      </>
    )
  }
}

export default RandomizeCharacter