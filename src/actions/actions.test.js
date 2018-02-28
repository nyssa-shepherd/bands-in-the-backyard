import * as actions from './actions.js';
import {fetchApiEvents} from './actions.js';
import {thunkMockEvent} from '../mockData.js';

describe('fetchApiEvents', () => {

  it('dispatch an addEvents action', async() => {
    const dispatch = jest.fn();
    await fetchApiEvents(234)(dispatch);
    expect(dispatch).toHaveBeenCalledWith(actions.addEvents(thunkMockEvent));
  });

});

describe('addEvents', () => {

  it('return a type of ADD_EVENTS with and array', () => {
    const events = ['event1', 'event3', 'event2'];
    const expected = {
      type: 'ADD_EVENTS',
      events
    };
    expect(expected).toEqual(actions.addEvents(events));
  });

});

describe('setLocation', () => {

  it('return a type of SET_LOCATION with a location', () => {
    const location = 'Denver';
    const expected = {
      type: 'SET_LOCATION',
      location
    };
    expect(expected).toEqual(actions.setLocation(location));
  });

});

describe('addArtist', () => {

  it('return a type of ADD_ARTIST with allArtistsEvents', () => {
    const artist = {
      name: 'name',
      city: 'city',
      state: 'state',
      date: 'date',
      venue: 'venue',
      ticketUrl: 'url'
    };
    const allArtistsEvents = [{artist}];
    const expected = {
      type: 'ADD_ARTIST',
      allArtistsEvents
    };

    expect(expected).toEqual(actions.addArtist(allArtistsEvents));
  });

});

describe('setArtistInLocation', () => {

  it('return a type of SET_ARTIST_IN_LOCATION with artistInLocation', () => {
    const artist = {
      name: 'name',
      city: 'city',
      state: 'state',
      date: 'date',
      venue: 'venue',
      ticketUrl: 'url'
    };
    const artistInLocation = [{artist}];
    const expected = {
      type: 'SET_ARTIST_IN_LOCATION',
      artistInLocation
    };

    expect(expected).toEqual(actions.setArtistInLocation(artistInLocation));
  });

});