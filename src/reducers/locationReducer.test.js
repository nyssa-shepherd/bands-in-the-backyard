import * as actions from '../actions/actions.js';
import { locationReducer } from './locationReducer.js';

describe('locationReducer', () => {

  it('return default state', () => {
    const expected = '';
    expect(locationReducer(undefined, {})).toEqual(expected);
  });

});