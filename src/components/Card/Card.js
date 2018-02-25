import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import './Card.css';

const Card = ({name, city, state, date, time, venue, type, ticketUrl, image}) => {
  let cardtype;
  type === 'artist-card' ? cardtype = 'artist-card' : cardtype = 'event-card';
  
  return (
    <div className={`card ${cardtype}`}>
      <img src={image} />
      <div className='card-text'>
        <h1 className='artist-name'>{name}</h1>
        <h2 className='location-name'>{city}, {state}</h2>
        <p>{date} at {time}</p>
        <p>Venue: {venue}</p>
        <p>Get tickets: <a href={ticketUrl}>{ticketUrl}</a></p>
      </div>
    </div>
  );
};

export default withRouter(Card);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  ticketUrl: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};