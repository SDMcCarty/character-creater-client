import React from 'react';
import ReactDOM from 'react-dom';
import EditCharacter from './EditCharacter';

it('renders the edit character page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditCharacter />, div);
  ReactDOM.unmountComponentAtNode(div);
});