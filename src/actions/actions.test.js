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