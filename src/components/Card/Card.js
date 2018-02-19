import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({name, city, state, date, time, venue, ticketUrl, image}) => {
  return (
    <div className='card'>
      <img src={image} />
      <h1 className='artist-name'>{name}</h1>
      <h2 className='location-name'>{city}, {state}</h2>
      <p>{date} at {time}</p>
      <p>{venue}</p>
      <a href='{ticketurl}'>{ticketUrl}</a>
    </div>
  );
};

export default Card;

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