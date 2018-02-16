import React from 'react';

const Card = ({name, city, state, date, time, venue, ticketUrl}) => {

  return (
    <div>
      <h1>{name}</h1>
      <h2>{city}, {state}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>{venue}</p>
      <p>{ticketUrl}</p>
    </div>
  );
};

export default Card;