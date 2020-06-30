import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharacterContext from '../../context/CharacterContext';

class EditCharacter extends Component {
  state = {}

  static contextType = CharacterContext

  componentDidMount() {
    this.context.fetchCharacters()
  }

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
    console.log('submitted')
    console.log('the state', this.state)
    const characterId = this.props.match.params.character_id
    console.log('chara id is', characterId)
    const editChara = { ...this.state }
    console.log(editChara)
    this.context.editCharacter(characterId, editChara)
      .then(() => {
        console.log(characterId, 'charaId again!')
        this.props.history.push(`/character-list`)
      })
  }

  handleDelete = (e) => {
    e.preventDefault()
    const characterId = this.props.match.params.character_id
    this.context.deleteCharacter(characterId)
      .then(() => {
      this.props.history.push('/character-list')
    })
  }
  
  render() {
    console.log(this.context)
    console.log(this.context.editCharacter)
    console.log(this.context.deleteCharacter)
    let characters = this.context.charaList
    if(!characters || !characters.length) {
      return (
        <p className='character-loading'>Loading Character</p>
      )
    } else {
      let id = this.props.match.params.character_id
      // eslint-disable-next-line eqeqeq
      let character = characters.find(chara => chara.id == id)
      console.log('character is', character)
        if(!character) {
          return <p>Redirecting</p>
        } else {
            console.log('final return called')
            console.log(character)
            console.log(this.state)
            return (
                <form>
                  <section className='characterEditer'>
                    <label htmlFor='first_name'>First Name: <input 
                      required
                      type='text' 
                      placeholder={character.first_name}
                      id="first_name"
                      onChange={(e) => this.setFirstName(e.target.value)}/>
                    </label>
                    <label htmlFor='last_name'>Last Name: <input 
                      required
                      type='text' 
                      placeholder={character.last_name} 
                      id='last_name'
                      onChange={(e) => this.setLastName(e.target.value)}/>
                    </label>
                    <label htmlFor='age'>Age: <input 
                      type='text' 
                      placeholder={character.age} 
                      id='age'
                      onChange={(e) => this.setAge(e.target.value)}/>
                    </label>
                    <label htmlFor='sex'>Sex: <input 
                      type='text' 
                      placeholder={character.sex} 
                      id='sex'
                      onChange={(e) => this.setSex(e.target.value)}/>
                    </label>
                    <label htmlFor='major_trait'>Major Trait:<input 
                      required
                      type='text' 
                      placeholder={character.major_trait}
                      id='major_trait'
                      onChange={(e) => this.setMajorTrait(e.target.value)}/>
                    </label>
                    <label htmlFor='motivation'>Motivation:<input 
                      type='text' 
                      placeholder={character.motivation} 
                      id='motivation'
                      onChange={(e) => this.setMotivation(e.target.value)}/>
                    </label>
                    <label htmlFor='fear'>Fear:<input 
                      type='text' 
                      placeholder={character.fear} 
                      id='fear'
                      onChange={(e) => this.setFear(e.target.value)}/>
                    </label>
                    <label htmlFor='history'>History:<textarea 
                      placeholder={character.history} 
                      id='history'
                      onChange={(e) => this.setHistory(e.target.value)}/>
                    </label>
                  </section>
                
                  <Link to={`/characters/${character.id}`}><button type='submit' onClick={this.handleSubmit}>Save Character</button></Link>
                  <Link to={`/characters/${character.id}`}><button type='button'>Cancel Edit</button></Link>
                  <Link to='/character-list'><button type='button' onClick={(e) => {if (window.confirm('Are you sure you wish to delete this character?')) this.handleDelete(e)}}>Delete character</button></Link>
                </form>
          )
        }

    }
  }
}

export default EditCharacter