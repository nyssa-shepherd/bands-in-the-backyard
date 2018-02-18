import { shallow } from 'enzyme';
import {mapStateToProps} from './CardContainer.js';

describe('CardContainer', () => {

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
    const mockStore = {events: [event1]};
    const mapped = mapStateToProps(mockStore);

    expect(mapped.events).toEqual(mockStore.events);
  });

});