import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
// import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';
import ReviewCharacter from './Review-Character';

describe('renders the review page', () => {
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

  // it('renders the character to review', () => {
  //   const wrapper = shallow(<ReviewCharacter {...props}/>)
  //   expect(toJson(wrapper)).toMatchSnapshot()
  // })

  it('renders the review character page', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <ReviewCharacter />
      </BrowserRouter>, 
      div);
    ReactDOM.unmountComponentAtNode(div);
  })

})