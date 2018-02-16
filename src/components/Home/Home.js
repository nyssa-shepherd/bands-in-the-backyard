import React from 'react';
import Search from '../Search/Search.js';
import CardContainer from '../CardContainer/CardContainer.js';
import './Home.css';

const Home = () => {
  return (
    <div className='home-page'>
      <Search />
      <h2>UPCOMING NEAR DENVER</h2>
      <h3>Month Name</h3>
      <hr />
      <CardContainer />
    </div>
  );
};

export default Home;