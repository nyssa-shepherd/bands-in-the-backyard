import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Search from '../../containers/Search/Search.js';
import CardContainer from '../../containers/CardContainer/CardContainer.js';
import './Home.css';

export class Home extends Component {
  render () {
    let { location } = this.props;
    location = location.toUpperCase();

    return (
      <div className='home-page'>
        <Search />
        <div className='home-header'>
          <h2>UPCOMING NEAR {location}</h2>
        </div>
        <div className='cards'>
          <CardContainer />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = store => ({
  location: store.location
}); 

export default connect(mapStateToProps)(Home);

Home.propTypes = {
  location: PropTypes.string.isRequired
};