import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Home from '../Home/Home.js';
import Artists from '../Artists/Artists.js';
import './Header.css';

const Header = () => {
    return (
        <div>
            <header>
                <h1>Bands <span>in the</span> Backyard</h1>
                    <div>
                        <NavLink to='/home' className='home nav'>Home</NavLink>
                        <Route exact path='/home' component={Home} />

                        <NavLink to='/artists' className='artists nav'>Artists</NavLink>
                        <Route exact path='/artists' component={Artists} />
                    </div>
            </header>
        </div>
    )
}

export default Header;