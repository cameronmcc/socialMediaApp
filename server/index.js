const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const api = express();

api.use(cors());

api.get('/', (req, res) => {
  res.json('Successful endpoint');
});

api.listen(5000, () => console.log('Api listening'));
