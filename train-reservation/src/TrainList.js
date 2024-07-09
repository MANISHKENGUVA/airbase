import React, { useState, useEffect } from 'react';
import Train from './Train';

function TrainList() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/trains')
      .then(response => response.json())
      .then(data => setTrains(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Train Reservation</h1>
      {trains.map(train => (
        <Train key={train.id} train={train} />
      ))}
    </div>
  );
}

export default TrainList;