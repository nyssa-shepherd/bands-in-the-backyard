import React from 'react';
import { shallow } from 'enzyme';
import { 
  mapStateToProps, 
  CardContainer } from './CardContainer.js';

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardContainer />);
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
    const mockStore = {events: [event1]};
    const mapped = mapStateToProps(mockStore);

    expect(mapped.events).toEqual(mockStore.events);
  });

});