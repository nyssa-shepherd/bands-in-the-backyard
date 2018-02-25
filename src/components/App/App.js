import React, { Component } from 'react';
import Header from '../Header/Header.js';
import { Route, Redirect } from 'react-router-dom';
import DefaultPage from '../DefaultPage/DefaultPage';
import Home from '../Home/Home.js';
import './App.css';

class App extends Component {  
  render() {
    //localStorage.location ? <Redirect to='/home' /> : <Redirect to='/' />;
    return (
      <div className="App">
        {
          localStorage.location && 
            <Header/>
        }

        {
          !localStorage.location &&
          <Route exact path='/' component={DefaultPage} />
        }
        
      </div>
    );
  }
}

export default App;


