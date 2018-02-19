import React, { Component } from 'react';
import { setLocation, fetchApiEvents } from '../../actions/actions.js';
import { connect } from 'react-redux';
import locationObj from '../../locationObject.js';


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
    const { location } = this.props;

    await this.props.fetchApiEvents(locationObj[location]);
    this.setState({location: ''});
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