/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import {
  Search, 
  mapStateToProps, 
  mapDispatchToProps} from './Search.js';

describe('Search', () => {
  let wrapper;
  let mockMatch;
  const mockEvent = {target: {value: 'text'}};

  beforeEach(() => {
    mockMatch = {path: '/artists'};
    wrapper = shallow(<Search 
      match={mockMatch} 
      fetchApiEvents={jest.fn()} 
      fetchArtist={jest.fn()}
      setFavoriteArtists={jest.fn()}/>);
  });

  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('default state values', () => {
    expect(wrapper.state().inputVal).toEqual('');
    expect(wrapper.state().favArtists).toEqual([]);
    expect(wrapper.state().redirect).toEqual(false);
    expect(wrapper.state().suggestedWords).toEqual([]);
  });

  it('update input state when inputHandler is called', () => {
    wrapper.instance().inputHandler(mockEvent);
    expect(wrapper.state().inputVal).toEqual(mockEvent.target.value);
  });

  it('calls handleLocation after inputHandler has been called', () => {
    mockMatch = {path: '/home'};
    wrapper.instance().inputHandler(mockEvent);
    expect(wrapper.instance().handleLocation()).toHaveBeenCalled();
  });

  it('submitHandler', () => {
    mockEvent.preventDefault = jest.fn();
    wrapper.instance().submitHandler(mockEvent);
    expect(wrapper.state().inputVal).toEqual('');
    expect(wrapper.state().redirect).toBeTrue;
  });

  it('setLocalStorage', () => {
    const expected = {'favArtists': 'artist'};
    wrapper.instance().setLocalStorage();
    window.localStorage.setItem('favArtists', 'artist');
    expect(window.localStorage).toEqual(expected);
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