import React from 'react';
import { shallow } from 'enzyme';
import {
  Search, 
  mapStateToProps, 
  mapDispatchToProps} from './Search.js';

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('default state values', () => {
    expect(wrapper.state().inputVal).toEqual('');
    expect(wrapper.state().favArtists).toEqual([]);
  });

  it('map the store correctly', () => {
    const artist = {
      key: 8,
      name: 'name',
      city: 'city',
      state: 'state',
      date: 'date',
      time: 'time',
      venue: 'venue',
      ticketUrl: 'url'
    };
    const mockStore = {location: 'denver', allArtistEvents: [artist], artistInLocation: [artist]};
    const mapped = mapStateToProps(mockStore);

    expect(mapped.location).toEqual(mockStore.location);
    expect(mapped.allArtistEvents).toEqual(mockStore.allArtistEvents);
    expect(mapped.artistInLocation).toEqual(mockStore.artistInLocation);
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

  it('call dispatch function after MDTP of fetchArtist', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.fetchArtist();
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('call dispatch function after MDTP of setArtistInLocation', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.setArtistInLocation();
    expect(mockDispatch).toHaveBeenCalled();
  });

});