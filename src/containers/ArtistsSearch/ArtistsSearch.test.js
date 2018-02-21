// import React from 'react';
// import { shallow } from 'enzyme';
// import {
//   ArtistsSearch, 
//   mapStateToProps, 
//   mapDispatchToProps} from './ArtistsSearch.js';

// describe('Search', () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<ArtistsSearch />);
//   });

//   it('default state of location is empty string', () => {
//     expect(wrapper.state().artist).toEqual('');
//   });

//   // it('map the store correctly', () => {
//   //   const artist1 = {
//   //     name: 'name',
//   //     city: 'city',
//   //     state: 'state',
//   //     date: 'date',
//   //     venue: 'venue',
//   //     ticketUrl: 'url'
//   //   };
//   //   const mockStore = {allArtistEvents: [artist1], artistInLocation: [artist1]};
//   //   const mapped = mapStateToProps(mockStore);

//   //   expect(mapped.allAritstEvents).toEqual(mockStore.allArtistEvents);
//   //   expect(mapped.artistInLocation).toEqual(mockStore.artistInLocation);
//   // });

//   it('call dispatch function after MDTP of fetchApiData', () => {
//     const mockDispatch = jest.fn();
//     const mapped = mapDispatchToProps(mockDispatch);

//     mapped.fetchArtist();
//     expect(mockDispatch).toHaveBeenCalled();
//   });

//   it('call dispatch function after MDTP of setLocation', () => {
//     const mockDispatch = jest.fn();
//     const mapped = mapDispatchToProps(mockDispatch);

//     mapped.setArtistInLocation();
//     expect(mockDispatch).toHaveBeenCalled();
//   });

// });