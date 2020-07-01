import React from 'react';
import ReactDOM from 'react-dom';
// import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';
import CharacterList from './CharacterList';

describe('Character List', () => {
  // const props = {
  //   first_name: 'A',
  //   last_name: 'B',
  //   age: '34',
  //   sex: 'female',
  //   major_trait: 'brazen',
  //   motivation: 'brains',
  //   fear: 'fire',
  //   history: 'everything was fine until the bite',
  // }

  it('renders the character list', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CharacterList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})