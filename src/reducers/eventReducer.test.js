import eventReducer from './eventReducer.js';
import * as actions from '../actions/actions.js';

describe('eventReducer', () => {

  it('return default state', () => {
    const expected = [];
    expect(eventReducer(undefined, {})).toEqual(expected);
  });

});