import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Review-Character.css'

class ReviewCharacter extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit was called')
    this.props.saveNewCharacter()
  }

  render() {
    // console.log('props', this.props)
    // console.log('new character', this.props.newCharacter)
    // console.log('save chara', this.props.saveNewCharacter)
    return (
      <section className='review-character-section'>
        <p>Saved characters can be edited later</p>
        <div className='character'>
          <p>Name: {this.props.newCharacter.first_name} {this.props.newCharacter.last_name}</p>
          <p>Major Event: {this.props.newCharacter.major_trait}</p>
        </div>

        {/* <Link to='/character-list'><button type='submit' onSubmit={this.handleSubmit}>Save Character</button></Link> */}
        <button type='submit' onClick={this.handleSubmit}>Save Character</button>
        <Link to='/create'><button type='button'>Delete and start again</button></Link>
        <Link to='/randomize'><button type='button'>Randomize Character</button></Link>
      </section>
    )
  }
}

export default ReviewCharacter