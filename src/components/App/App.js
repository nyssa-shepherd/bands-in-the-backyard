import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEvents, fetchApiData } from '../../actions/actions.js';
import fetchApi from '../apiCall/apiCall.js';
import Header from '../Header/Header.js';
import withRouter from 'react-router-dom/withRouter';

class App extends Component {

  componentDidMount = async() => {
    await this.props.fetchApiData();
  }
  
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export const mapStateToProps = store => ({
  events: store.events
});

export const mapDispatchToProps = dispatch => ({
  addEvents: event => dispatch(addEvents(event)),
  fetchApiData: () => dispatch(fetchApiData())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


