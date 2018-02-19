import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card.js';
import './CardContainer.css';

class CardContainer extends Component {
  render () {
    let rendered;

    this.props.match.path === '/artists' ? 
      rendered = this.props.artistInLocation.map((artist, i) => {
        return <Card
          name={artist.lineup[0]}
          city={artist.venue.city}
          state={artist.venue.region}
          date={artist.datetime}
          venue={artist.venue.name}
          ticketUrl={artist.offers[0].url}
          key={i}
        />;
      })
      : rendered = this.props.events.map((event, i) => {
        return <Card
          image={event.image} 
          name={event.name}
          city={event.city}
          state={event.state}
          date={event.date}
          time={event.time}
          venue={event.venue}
          ticketUrl={event.ticketUrl}
          key={i}
        />;
      });

    return (  
      <div className='card-container'>
        {rendered}
      </div>
    );
  }
}

export const mapStateToProps = store => ({
  events: store.events,
  artistInLocation: store.artistInLocation
});

export default withRouter(connect(mapStateToProps)(CardContainer));

CardContainer.propTypes = {
  match: PropTypes.object.isRequired,
  artistInLocation: PropTypes.array.isRequired,
  events:  PropTypes.array.isRequired
};