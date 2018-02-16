import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card.js';
import './CardContainer.css';

const CardContainer = ({events}) => {
  const rendered = events.map((event, i) => {
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
};

export const mapStateToProps = store => ({
  events: store.events
});

export default connect(mapStateToProps)(CardContainer);