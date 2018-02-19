import * as actions from './actions.js';

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