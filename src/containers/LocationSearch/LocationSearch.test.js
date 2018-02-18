import {mapStateToProps, mapDispatchToProps} from './Search.js';

describe('Search', () => {

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
    const mockStore = {events: [event1], location: 'denver'};
    const mapped = mapStateToProps(mockStore);

    expect(mapped.events).toEqual(mockStore.events);
    expect(mapped.location).toEqual(mockStore.location);
  });

  it('call dispatch function after MDTP of fetchApiData', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.fetchApiData();
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('call dispatch function after MDTP of setLocation', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.setLocation();
    expect(mockDispatch).toHaveBeenCalled();
  });

});