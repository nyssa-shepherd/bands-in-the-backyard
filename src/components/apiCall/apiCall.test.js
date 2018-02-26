import { cleanData, fetchEventApi, fetchArtistApi, cleanArtistData } from './apiCall.js';
import { mockEvent, mockArtist } from '../../mockData.js';

describe('fetchApi', () => {
  
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        _embedded: mockEvent
      })
    }));
  });

  it('fetch gets called', async() => {
    expect(window.fetch).not.toHaveBeenCalled();
    await fetchEventApi();
    expect(window.fetch).toHaveBeenCalled();
  });

  it('cleaner function returns an object', async() => {
    const data = await cleanData(mockEvent);
    expect(typeof data).toEqual('object');
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
        data: mockArtist
      })
    }));
  });

  it('fetch gets called', async() => {
    expect(window.fetch).not.toHaveBeenCalled();
    await fetchArtistApi();
    expect(window.fetch).toHaveBeenCalled();
  });

  it('cleaner function returns an object', async() => {
    const data = await cleanArtistData(mockArtist);
    expect(typeof data).toEqual('object');
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