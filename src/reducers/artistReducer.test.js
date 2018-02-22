import * as actions from '../actions/actions.js';
import { artistReducer, artistInLocationReducer } from './artistReducer.js';

describe('artistReducer', () => {

  it('return default state', () => {
    const expected = [];
    expect(artistReducer(undefined, {})).toEqual(expected);
  });

  it('return new state', () => {
    const artist = {
      key: 90,
      name: 'name',
      city: 'city',
      state: 'state',
      date: 'date',
      time: 'time',
      venue: 'venue',
      ticketUrl: 'url'
    };
    const expected = [artist];

    expect(artistReducer(undefined, actions.addArtist([artist]))).toEqual(expected);
  });

});