import React, { Component } from 'react';
import CharacterContext from '../../context/CharacterContext'
import './CreateCharacter.css'

class CreateCharacter extends Component {
  static contextType = CharacterContext

  state = {
    first_name: '',
    last_name: '',
    age: '',
    sex: '',
    major_trait: '',
    motivation: '',
    fear: '',
    history: '',
  };
  
  setFirstName = (newFirstName) => {
    this.setState({
      first_name: newFirstName
    })
  } 

  setLastName = (newLastName) => {
    this.setState({
      last_name: newLastName
    })
  } 

  setAge = (newAge) => {
    this.setState({
      age: newAge
    })
  }

  setSex = (newSex) => {
    this.setState({
      sex: newSex
    })
  }

  setMajorTrait = (newMajorTrait) => {
    this.setState({
      major_trait: newMajorTrait
    })
  } 

  setFear = (newFear) => {
    this.setState({
      fear: newFear
    })
  }

  setMotivation = (newMotivation) => {
    this.setState({
      motivation: newMotivation
    })
  }

  setHistory = (newHistory) => {
    this.setState({
      history: newHistory
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    this.context.setNewCharacter(this.state)
    this.props.history.push('/review-character')
  }
  
  render() {
    console.log(this.context)
    return(
      <section aria-label='create character form'>
        <h2 className='page-heading'>Create Your Character!</h2>
        <form>
          <fieldset>
            <legend>The Basics</legend>
            <label htmlFor='first_name'>First Name</label>
            <input 
              required
              type='text' 
              value={this.state.first_name}
              name='first_name' 
              id='first_name' 
              onChange={(e) => this.setFirstName(e.target.value)}
            />
            <label htmlFor='last_name'>Last Name</label>
            <input 
              required
              type='text' 
              value={this.state.last_name} 
              name='last_name' 
              id='last_name' 
              onChange={(e) => this.setLastName(e.target.value)}
            />
            <label htmlFor='age'>Age</label>
            <input
              type='text'
              value={this.state.age}
              name='age'
              id='age'
              onChange={(e) => this.setAge(e.target.value)}
            />
            <label htmlFor='sex'>Sex</label>
            <input
              type='text'
              value={this.state.sex}
              name='sex'
              id='sex'
              onChange={(e) => this.setSex(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>The Personality</legend>
            <label htmlFor='major_trait'>Major Trait</label>
            <input 
              required
              type='text' 
              value={this.state.major_trait}
              name='major_trait' 
              id='major_trait' 
              onChange={(e) => this.setMajorTrait(e.target.value)}
            />
            <label htmlFor='motivation'>Motivation</label>
            <input
              type='text'
              value={this.state.motivation}
              name='motivation'
              id='motivation'
              onChange={(e) => this.setMotivation(e.target.value)}
            />
            <label htmlFor='fear'>Fear</label>
            <input
              type='text'
              value={this.state.fear}
              name='fear'
              id='fear'
              onChange={(e) => this.setFear(e.target.value)}
            />
            <label htmlFor='history'>History</label>
            <textarea
              value={this.state.history}
              name='history'
              id='history'
              // width='30'
              rows='5'
              onChange={(e) => this.setHistory(e.target.value)}
            />
          </fieldset>
          <button type='button' onClick={this.handleClick}>Review Character</button>
        </form>
      </section>
    )
  }
}

export default CreateCharacter