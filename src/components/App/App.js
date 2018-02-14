import React, { Component } from 'react';
import Header from '../Header/Header.js';
import fetchApi from '../apiCall/apiCall.js';

class App extends Component {
  componentDidMount = () => {
    fetchApi();
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
