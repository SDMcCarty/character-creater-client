import React, { Component } from 'react';

class CreateCharacter extends Component {
  state = {
    first_name: '',
    last_name: '',
    major_trait: ''
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

  setMajorTrait = (newMajorTrait) => {
    this.setState({
      major_trait: newMajorTrait
    })
  } 

  handleClick = (e) => {
    e.preventDefault()
    this.props.makeNewCharacter(this.state)
    this.props.history.push('/review-character')
  }
  
  render() {
    return(
      <form>
        <fieldset>
          <legend>Name</legend>
          <label htmlFor='first_name'>First Name</label>
          <input 
            type='text' 
            value={this.state.first_name}
            name='first_name' 
            id='first_name' 
            onChange={(e) => this.setFirstName(e.target.value)}
          />
          <label htmlFor='last_name'>Last Name</label>
          <input 
            type='text' 
            value={this.state.last_name} 
            name='last_name' 
            id='last_name' 
            onChange={(e) => this.setLastName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend>Major Trait</legend>
          <label htmlFor='major_trait'>Major Trait</label>
          <input 
            type='text' 
            value={this.state.major_trait}
            name='major_trait' 
            id='major_trait' 
            onChange={(e) => this.setMajorTrait(e.target.value)}
          />
        </fieldset>
        <button type='button' onClick={this.handleClick}>Review Character</button>
      </form>
    )
  }
}

export default CreateCharacter