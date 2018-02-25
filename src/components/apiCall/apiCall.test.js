import { cleanData } from './apiCall.js';

describe('fetchApi', () => {

  it('fetch gets called', () => {
    const eventArray = [{
      image: 'url',
      name: 'name',
      city: 'city',
      state: 'state',
      venue: 'venue',
      ticketUrl: 'url',
      uselessData: 'blah'
    }];

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: eventArray
      })
    }));

    expect(cleanData()).not.toHaveBeenCalled();
    window.fetch;
    expect(cleanData()).toBeCalledWith(eventArray);
  });

  it('should throw the error when catch is hit in the Promise', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 404
    }));
    const expectedError = Error('error');
    
    try {
      window.fetch;
    } catch (err) {
      expect(err).toEqual(expectedError);
    }
  });

});