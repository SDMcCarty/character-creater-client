import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CharacterSmall from '../CharacterSmall/CharacterSmall';


class CharacterList extends Component {

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