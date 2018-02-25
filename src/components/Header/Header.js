import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Home from '../Home/Home.js';
import Artists from '../../containers/Artists/Artists.js';
import './Header.css';

const Header = () => {
  return (
    <div>
      <div className='above-header'>
        <h1>Bands <span>in the</span> Backyard</h1>
        <div>
          <NavLink 
            to='/home' 
            activeClassName='active'
            className='home nav'>
            HOME
          </NavLink>
          <NavLink 
            activeClassName='active'
            to='/artists' 
            className='artists nav'>
              ARTISTS
          </NavLink>
        </div>
      </div>
      <header>
      </header>
      <div>
        <Route exact path='/home' component={Home} />
        <Route exact path='/artists' component={Artists} />
      </div>
    </div>
  );
};

export default Header;