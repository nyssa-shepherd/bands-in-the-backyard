import React from 'react';
import './Card.css';

const Card = ({name, city, state, date, time, venue, ticketUrl, image}) => {
console.log(name);
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