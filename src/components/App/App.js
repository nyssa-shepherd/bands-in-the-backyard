import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEvents } from '../../actions/actions.js';
import Header from '../Header/Header.js';
import fetchApi from '../apiCall/apiCall.js';
import withRouter from 'react-router-dom/withRouter';

class App extends Component {
  componentDidMount = async() => {
    // const apiData = await fetchApi();
    // console.log(apiData)
    // this.props.addEvents(apiData)
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
  addEvents: event => dispatch(addEvents(event))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


