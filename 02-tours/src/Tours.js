import React from 'react';
import Tour from './Tour';

const Tours = ({ tours }) => {
  return (
    <>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>

      { tours.map(tour => {
        return (
          <Tour data={tour.id} {...tour}/>
        )
      }
        
      )};
      
    </>
  );
};

export default Tours;
