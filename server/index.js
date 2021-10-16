const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const api = express();
const user = require('./models/user');

mongoose.connect(
  'mongodb+srv://cameronmccloskey:GnNvHp7c3zKtbTk@cluster0.bzmv9.mongodb.net/test',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Mongodb connected'));

api.use(cors());

api.get('/', (req, res) => {
  user.find({}, (err, users) => {
    err ? res.json(err) : res.json(users);
  });
});

api.get('/create', (req, res) => {
  if (req.query) {
    const user1 = req.query;
    user.create(user1, (err, user) => (err ? res.json(err) : res.json(user)));
  } else {
    res.json('No user query submitted');
  }
});

api.get('/login', (req, res) => {
  if (req.query) {
    const user1 = req.query;
    user.find(user1, (err, user) => (err ? res.json(err) : res.json(user1)));
  } else {
    res.json('No user query submitted');
  }
});

api.listen(5000, () => console.log('Api listening'));
