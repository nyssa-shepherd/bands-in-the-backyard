import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card.js';

describe('Card', () => {

  it('snapshot test', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });

});