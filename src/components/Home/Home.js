import React from 'react';
import Search from '../../containers/Search/Search.js';
import CardContainer from '../../containers/CardContainer/CardContainer.js';
import './Home.css';

const Home = () => {
  return (
    <div className='home-page'>
      <Search />
      <h2>UPCOMING NEAR YOU</h2>
      <h3>Month Name</h3>
      <hr />
      <CardContainer />
    </div>
  );
};

export default Home;