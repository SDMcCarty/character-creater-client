import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReviewCharacter from './Review-Character';

describe('renders the review page', () => {

  it('renders the review character page', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <ReviewCharacter />
      </BrowserRouter>, 
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

});