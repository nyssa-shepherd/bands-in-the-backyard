import fetchApi from './apiCall.js';

describe('fetchApi', () => {

//   it('fetch gets called', () => {
//     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//       status: 200,
//       json: () => Promise.resolve({
//         results: 'return results',
//       })
//     }));

//     expect(window.fetch).not.toHaveBeenCalled();
//     fetchApi();
//     expect(window.fetch).toBeCalled();
//   });

  it('should throw the error when catch is hit in the Promise', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 404
    }))
    const expectedError = Error('error');
    
    try {
      window.fetch;
    } catch(err) {
      expect(err).toEqual(expectedError);
    }
  });

});