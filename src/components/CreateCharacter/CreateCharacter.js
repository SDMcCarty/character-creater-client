import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateCharacter extends Component {

  render() {
    return(
      <form>
        <fieldset>
          <legend>Name</legend>
          <label htmlFor='firstname'>First Name</label>
          <input type='text' name='firstname' id='firstname' />
          <label htmlFor='lastname'>Last Name</label>
          <input type='text' name='lastname' id='lastname' />
          <span>If left blank, you will be given a randomized initial letter</span>
        </fieldset>
        <fieldst>
          <legend>Major Event</legend>
          <label htmlFor='majorevent'>Major Event</label>
          <input type='text' name='majorevent' id='majorevent' />
        </fieldst>
        <Link to='review-character'><button type='button'>Review Character</button></Link>
      </form>
    )
  }
}

export default CreateCharacter