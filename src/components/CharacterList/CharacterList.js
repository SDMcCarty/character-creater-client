import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CharacterSmall from '../CharacterSmall/CharacterSmall';


class CharacterList extends Component {

  componentDidMount() {
    fetch('http://localhost:8000/api/users/1')
      .then(res => res.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <>
      <Route path={'/:characterId'}>
        <ul>
          <CharacterSmall />
        </ul>
      </Route>
      </>
    )
  }
}

export default CharacterList