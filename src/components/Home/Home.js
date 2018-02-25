import React from 'react';
import Search from '../../containers/Search/Search.js';
import CardContainer from '../../containers/CardContainer/CardContainer.js';
import './Home.css';

const Home = () => {
  return (
    <div className='home-page'>
      <div className='home-header'>
        <h2>UPCOMING NEAR YOU</h2>
      </div>
      <div className='cards'>
        <CardContainer />
      </div>
    </div>
  );
};

export default Home;