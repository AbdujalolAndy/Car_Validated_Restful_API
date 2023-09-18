const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const owner = require('./routes/owner');
const carInfo = require('./routes/carInfo');


const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.use('/api/owner', owner);
app.use('/api/carInfo', carInfo)

mongoose.connect('mongodb://127.0.0.1/Car')
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
