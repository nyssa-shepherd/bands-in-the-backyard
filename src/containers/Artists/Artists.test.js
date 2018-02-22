import React from 'react';
import { shallow } from 'enzyme';
import Artists from './Artists.js';

describe('Artists', () => {

  it('snapshot test', () => {
    const wrapper = shallow(<Artists />);
    expect(wrapper).toMatchSnapshot();
  });

});