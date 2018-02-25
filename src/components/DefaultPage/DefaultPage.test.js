import React from 'react';
import { shallow } from 'enzyme';
import DefaultPage from './DefaultPage.js';

describe('DefaultPage', () => {

  it('snapshot test', () => {
    const wrapper = shallow(<DefaultPage />);
    expect(wrapper).toMatchSnapshot();
  });

});