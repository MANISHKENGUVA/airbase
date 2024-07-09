import React from 'react';

function Train({ train }) {
  return (
    <div>
      <h2>{train.name} ({train.number})</h2>
      <p>Seats Available: {train.seats}</p>
    </div>
  );
}
export default Train;