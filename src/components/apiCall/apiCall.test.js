import { cleanData, fetchEventApi } from './apiCall.js';
import { mockEvent } from '../../mockData.js';

describe('fetchApi', () => {
  
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        _embedded: 'return results'
      })
    }));
  });

  it('fetch gets called', async() => {
    expect(window.fetch).not.toHaveBeenCalled();
    await fetchEventApi();
    expect(window.fetch).toHaveBeenCalled();
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

describe('fetchArtistApi', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        _embedded: mockEvent
      })
    }));
  });

  it('fetch gets called', async() => {
    const data = await cleanData();
    expect(typeof data).toEqual('object');
  });

});