import React, { Component } from 'react';
import CharacterContext from '../../context/CharacterContext'
import GetRandom from '../Utils/GetRandom'
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

  handleSubmit = (e) => {
    e.preventDefault()
    this.context.setNewCharacter(this.state)
    this.props.history.push('/review-character')
  }
  
  render() {
    return(
      <section aria-label='create character form'>
        <h2 className='page-heading'>Create Your Character!</h2>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Basics</legend>
            <label htmlFor='first_name'>*First Name</label>
            <input 
              required
              type='text' 
              value={this.state.first_name}
              name='first_name' 
              id='first_name' 
              onChange={(e) => this.setFirstName(e.target.value)}
            />
            <button type='button' onClick={() => {this.setFirstName(GetRandom.getRandomInitial())}}>Randomize</button>
            <label htmlFor='last_name'>*Last Name</label>
            <input 
              required
              type='text' 
              value={this.state.last_name} 
              name='last_name' 
              id='last_name' 
              onChange={(e) => this.setLastName(e.target.value)}
            />
            <button type='button' onClick={() => {this.setLastName(GetRandom.getRandomInitial())}}>Randomize</button>
            <label htmlFor='age'>Age</label>
            <input
              type='text'
              value={this.state.age}
              name='age'
              id='age'
              onChange={(e) => this.setAge(e.target.value)}
            />
            <button type='button' onClick={() => {this.setAge(GetRandom.getRandomAge())}}>Randomize</button>
            <label htmlFor='sex'>Sex</label>
            <input
              type='text'
              value={this.state.sex}
              name='sex'
              id='sex'
              onChange={(e) => this.setSex(e.target.value)}
            />
            <button type='button' onClick={() => {this.setSex(GetRandom.getRandomSex())}}>Randomize</button>
          </fieldset>
          <fieldset>
            <legend>Personality</legend>
            <label htmlFor='major_trait'>*Major Trait</label>
            <input 
              required
              type='text' 
              value={this.state.major_trait}
              name='major_trait' 
              id='major_trait' 
              onChange={(e) => this.setMajorTrait(e.target.value)}
            />
            <button type='button' onClick={() => {this.setMajorTrait(GetRandom.getRandomMajorTrait())}}>Randomize</button>
            <label htmlFor='motivation'>Motivation</label>
            <input
              type='text'
              value={this.state.motivation}
              name='motivation'
              id='motivation'
              onChange={(e) => this.setMotivation(e.target.value)}
            />
            <button type='button' onClick={() => {this.setMotivation(GetRandom.getRandomMotivation())}}>Randomize</button>
            <label htmlFor='fear'>Fear</label>
            <input
              type='text'
              value={this.state.fear}
              name='fear'
              id='fear'
              onChange={(e) => this.setFear(e.target.value)}
            />
            <button type='button' onClick={() => {this.setFear(GetRandom.getRandomFear())}}>Randomize</button>
            <label htmlFor='history'>History</label>
            <textarea
              value={this.state.history}
              name='history'
              id='history'
              rows='5'
              onChange={(e) => this.setHistory(e.target.value)}
            />
            <button type='button' onClick={() => {this.setHistory(GetRandom.getRandomHistory())}}>Randomize</button>
          </fieldset>
          <button type='submit'>Review Character</button>
          <p className='required-warning'>* denotes required fields (can be edited later)</p>
        </form>
      </section>
    )
  }
}

export default CreateCharacter