import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setLocation, fetchApiEvents } from '../../actions/actions.js';
import locationObj from '../../locationObject.js';


export class LocationSearch extends Component {
  constructor () {
    super();
    this.state = {
      location: ''
    };
  }

  componentDidMount = async() => {
    const { fetchApiEvents } = this.props;
    const location = localStorage.getItem('location');

    localStorage ?  await fetchApiEvents(locationObj[location]) : null;
  }

  inputHandler = (e) => {
    const location = e.target.value;
    this.setState({ location }, () => {
      this.props.setLocation(this.state.location);
    });
  }

  submitHandler = async(e) => {
    e.preventDefault();
    const { location, fetchApiEvents } = this.props;
    
    await fetchApiEvents(locationObj[location]);
    localStorage.setItem('location', location);
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

LocationSearch.propTypes = {
  setLocation: PropTypes.func,
  fetchApiEvents: PropTypes.func
};