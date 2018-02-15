import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home.js';

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});