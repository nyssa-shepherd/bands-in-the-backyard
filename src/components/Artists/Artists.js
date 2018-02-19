import React from 'react';
import ArtistsSearch from '../../containers/ArtistsSearch/ArtistsSearch.js';
import CardContainer from '../../containers/CardContainer/CardContainer.js';

const Artists = () => {
  return (
    <div>
      <ArtistsSearch />
      <CardContainer />
    </div>
  );
};

export default Artists;