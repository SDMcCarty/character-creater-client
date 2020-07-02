import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';
import CharacterList from './CharacterList';

describe('Character List', () => {

  it('renders the character list', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><CharacterList /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})