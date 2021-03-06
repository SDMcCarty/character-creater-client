import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Character from './Character';

it('renders the character to the page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Character />
    </BrowserRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});