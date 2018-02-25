import React from 'react';
import { shallow } from 'enzyme';
import { 
  mapStateToProps, 
  CardContainer } from './CardContainer.js';

describe('CardContainer', () => {
  let wrapper;
  let mockMatch;
  let mockArtists;

  beforeEach(() => {
    mockMatch = {path: '/artists'};
    mockArtists = [{
      name: 'name',
      city: 'city',
      state: 'state',
      date: 'date',
      venue: 'venue',
      ticketUrl: 'url'
    }];
    wrapper = shallow(<CardContainer artistInLocation={mockArtists} match={mockMatch} />);
  });

  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
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
    const mockStore = {events: [event1], artistInLocation: [{artist: 'artist'}]};
    const mapped = mapStateToProps(mockStore);

    expect(mapped.events).toEqual(mockStore.events);
    expect(mapped.artistInLocation).toEqual(mockStore.artistInLocation);
  });

});