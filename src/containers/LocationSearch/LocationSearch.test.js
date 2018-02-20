import React from 'react';
import { shallow } from 'enzyme';
import {
  LocationSearch, 
  mapStateToProps, 
  mapDispatchToProps} from './LocationSearch.js';

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LocationSearch />);
  });

  it('default state of location is empty string', () => {
    expect(wrapper.state().location).toEqual('');
  });

  it('map the store correctly', () => {
    const event1 = {
      image: 'url',
      name: 'name',
      city: 'city',
      state: 'state',
      date: 'date',
      time: 'time',
      venue: 'venue',
      ticketUrl: 'url'
    };
    const mockStore = {events: [event1], location: 'denver'};
    const mapped = mapStateToProps(mockStore);

    expect(mapped.events).toEqual(mockStore.events);
    expect(mapped.location).toEqual(mockStore.location);
  });

  it('call dispatch function after MDTP of fetchApiData', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.fetchApiEvents();
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('call dispatch function after MDTP of setLocation', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.setLocation();
    expect(mockDispatch).toHaveBeenCalled();
  });

});