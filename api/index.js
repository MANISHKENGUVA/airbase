const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

let trains = [
  { id: 1, number: '12345', name: 'Express Train', seats: 100 },
  { id: 2, number: '54321', name: 'Local Train', seats: 80 },
];

app.get('/trains', (req, res) => {
  res.json(trains);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});