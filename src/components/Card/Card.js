import React from 'react';

const Card = ({name, city, state, date, time, venue, ticketUrl}) => {

  return (
    <div>
      <h1 className='artist-name'>{name}</h1>
      <h2 className='location-name'>{city}, {state}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>{venue}</p>
      <a href='{ticketurl}'>{ticketUrl}</a>
    </div>
  );
};

export default Card;