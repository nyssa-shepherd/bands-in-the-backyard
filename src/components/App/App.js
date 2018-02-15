import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEvents } from '../../actions/actions.js';
import Header from '../Header/Header.js';
import withRouter from 'react-router-dom/withRouter';

class App extends Component {
  componentDidMount = async() => {
    this.props.addEvents();
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


