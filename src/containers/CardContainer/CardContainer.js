import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card.js';
import './CardContainer.css';

export class CardContainer extends Component {
  render () {
    let rendered;
    
    this.props.match.path === '/artists' ? 
      rendered = this.props.artistInLocation.map((artist, i) => {
        return <Card
          image={artist.pic}
          name={artist.name}
          city={artist.city}
          state={artist.state}
          date={artist.date}
          venue={artist.venue}
          ticketUrl={artist.ticketUrl}
          type='artist-card'
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
          type='event-card'
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
  match: PropTypes.object,
  artistInLocation: PropTypes.array,
  events:  PropTypes.array
};