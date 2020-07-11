import React from 'react';

const CharacterContext = React.createContext({
  charaList: [],
  newChara: {},
  error: null,
  saveNewCharacter: () => {},
  setNewCharacter: () => {},
  deleteCharacter: () => {},
  fetchCharacters: () => {},
  editCharacter: () => {},
});

export default CharacterContext;