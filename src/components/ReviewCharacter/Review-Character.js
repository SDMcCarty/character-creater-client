import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Review-Character.css'

class ReviewCharacter extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit was called')
    this.props.saveNewCharacter()
    .then(() => {
      this.props.history.push('/character-list')
    })
  }

  render() {
    // console.log('props', this.props)
    // console.log('new character', this.props.newCharacter)
    // console.log('save chara', this.props.saveNewCharacter)
    return (
      <section className='review-character-section'>
        <h2 className='page-heading'>Save Your Character!</h2>
        <p className='saved-character-warning'>Saved characters can be edited later</p>
        <div className='character'>
          <p><span className='p-label'>Name:</span> Johnny{this.props.newCharacter.first_name} {this.props.newCharacter.last_name}</p>
          <p><span className='p-label'>Age:</span> 34{this.props.newCharacter.age}</p>
          <p><span className='p-label'>Sex:</span> Male{this.props.newCharacter.sex}</p>
          <p><span className='p-label'>Major Trait:</span> Smart{this.props.newCharacter.major_trait}</p>
          <p><span className='p-label'>Motivation:</span> Pie{this.props.newCharacter.motivation}</p>
          <p><span className='p-label'>Fear:</span> Potatoes{this.props.newCharacter.fear}</p>
          <p><span className='p-label'>History:</span> When he was a child, he ate a sweet potato pie and has yet to feel that same amout of betrayal aagin, and fears they day he will again{this.props.newCharacter.history}</p>
        </div>

        <button type='submit' onClick={this.handleSubmit}>Save Character</button>
        <Link to='/create'><button type='button'>Delete and start again</button></Link>
        {/* <Link to='/randomize'><button type='button'>Randomize Character</button></Link> */}
      </section>
    )
  }
}

export default ReviewCharacter