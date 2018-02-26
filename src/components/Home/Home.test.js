import React from 'react';
import { shallow } from 'enzyme';
import { Home, mapStateToProps } from './Home.js';

describe('Home', () => {
  let wrapper;
  let mockLocation;

  beforeEach(() => {
    mockLocation = 'Denver, CO';
    wrapper = shallow(<Home location={mockLocation}/>);
  });

  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('map the store correctly', () => {
    const mockStore = {location: 'denver'};
    const mapped = mapStateToProps(mockStore);

    expect(mapped.location).toEqual(mockStore.location);
  });
  
});