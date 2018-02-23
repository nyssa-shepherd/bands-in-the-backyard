import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import DefaultPage from '../DefaultPage/DefaultPage';
import Home from '../Home/Home.js';
import Artists from '../Artists/Artists.js';
import './Header.css';

const Header = () => {
  return (
    <div>
      <header>
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
      </header>
      <div>
        <Route exact path='/home' component={Home} />
        <Route exact path='/artists' component={Artists} />
      </div>
    </div>
  );
};

export default Header;