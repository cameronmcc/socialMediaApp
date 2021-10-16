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
  user.create({ username: 'test', password: 'test2' }, (err, user) =>
    err ? res.json(err) : res.json(user)
  );
});

api.get('/login', (req, res) => {
  const user = req.query;
  res.json(user);
});

api.listen(5000, () => console.log('Api listening'));
