import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Review-Character.css'

class ReviewCharacter extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <section className='review-character-section'>
        <p>Saved characters can be edited later</p>
        <div className='character'>
          <p>Name: [Name or Initials]</p>
          <p>Major Event: [Event]</p>
        </div>

        <Link to='/character-list'><button type='submit' onSubmit={this.handleSubmit}>Save Character</button></Link>
        <Link to='/create'><button type='button'>Delete and start again</button></Link>
        <Link to='/randomize'><button type='button'>Randomize Character</button></Link>
      </section>
    )
  }
}

export default ReviewCharacter