import  React from 'react';
import Search from '../../containers/Search/Search.js';
import './DefaultPage.css';

const DefaultPage = () => { 
  return (
    <div className='default-page'>
      <div>
        <h1 className='title'>Bands 
        <span className='in-the'>in the</span> 
          Backyard
        </h1>
      </div>
      <div>
        <p>Enter your location to see upcoming concets near you.</p>
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default DefaultPage;