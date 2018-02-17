import * as actions from '../actions/actions.js';
import { locationReducer } from './locationReducer.js';

describe('locationReducer', () => {

  it('return default state', () => {
    const expected = '';
    expect(locationReducer(undefined, {})).toEqual(expected);
  });

  it('return new state', () => {
    const expected = 'denver';
    expect(locationReducer(undefined, actions.setLocation('denver'))).toEqual(expected);
  });

});