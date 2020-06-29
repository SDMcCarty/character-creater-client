import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CharacterContext from '../../context/CharacterContext'
import './Review-Character.css'

class ReviewCharacter extends Component {
  static contextType = CharacterContext

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit was called')
    this.context.saveNewCharacter()
    .then(() => {
      this.props.history.push('/character-list')
    })
  }

  render() {
    // console.log('props', this.props)
    // console.log('new character', this.props.newCharacter)
    // console.log('save chara', this.props.saveNewCharacter)
    const newCharacter = this.context.newChara
    return (
      <section className='review-character-section'>
        <h2 className='page-heading'>Save Your Character!</h2>
        <p className='saved-character-warning'>Saved characters can be edited later</p>
        <div className='character'>
          <p><span className='p-label'>Name:</span> {newCharacter.first_name} {newCharacter.last_name}</p>
          <p><span className='p-label'>Age:</span> {newCharacter.age}</p>
          <p><span className='p-label'>Sex:</span> {newCharacter.sex}</p>
          <p><span className='p-label'>Major Trait:</span> {newCharacter.major_trait}</p>
          <p><span className='p-label'>Motivation:</span> {newCharacter.motivation}</p>
          <p><span className='p-label'>Fear:</span> {newCharacter.fear}</p>
          <p><span className='p-label'>History:</span> {newCharacter.history}</p>
        </div>

        <button type='submit' onClick={this.handleSubmit}>Save Character</button>
        <Link to='/create'><button type='button'>Delete and start again</button></Link>
        {/* <Link to='/randomize'><button type='button'>Randomize Character</button></Link> */}
      </section>
    )
  }
}

export default ReviewCharacter