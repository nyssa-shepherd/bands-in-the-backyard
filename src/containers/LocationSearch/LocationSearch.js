import React, { Component } from 'react';
import { setLocation, fetchApiEvents } from '../../actions/actions.js';
import { connect } from 'react-redux';


class LocationSearch extends Component {
  constructor () {
    super();
    this.state = {
      location: ''
    };
  }

  inputHandler = (e) => {
    const location = e.target.value;
    this.setState({location}, () => {
      this.props.setLocation(this.state.location);
    });
  }

  submitHandler = async(e) => {
    e.preventDefault();
    await this.props.fetchApiEvents(this.props.location);
  }

  render () {
    return (
      <div>
        <form onSubmit={(e) => this.submitHandler(e)}>
          <input
            onChange={(e) => this.inputHandler(e)} 
            type='text'
            value={this.state.location}
          />
          <button>search</button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = store => ({
  events: store.events,
  location: store.location
});

export const mapDispatchToProps = dispatch => ({
  fetchApiEvents: (locationKey) => dispatch(fetchApiEvents(locationKey)),
  setLocation: location => dispatch(setLocation(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearch);