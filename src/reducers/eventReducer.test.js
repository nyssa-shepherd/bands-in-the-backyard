import { eventReducer } from './eventReducer.js';
import * as actions from '../actions/actions.js';s

describe('eventReducer', () => {

  it('return default state', () => {
    const expected = [];
    expect(eventReducer(undefined, {})).toEqual(expected);
  });

  it('return new state', () => {
    const event = {
      image: 'url',
      name: 'name',
      city: 'city',
      state: 'state',
      date: 'date',
      time: 'time',
      venue: 'venue',
      ticketUrl: 'url'
    };
    const expected = [event];

    expect(eventReducer(undefined, actions.addEvents(event))).toEqual(expected);
  });

});