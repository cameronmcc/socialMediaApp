const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose.connect(process.env.DB_URI, () => {
  console.log('Connected to MongoDB bay bayyy');
});

app.listen(5000, () => {
  console.log('Backend server running!');
});

// Middleware

app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

// Old version code

// const express = require('express');
// const cors = require('cors');
// const api = express();
// const user = require('./models/user');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const userRoutes = require('./routes/userRoutes');
// const authRoutes = require('./routes/auth');
// const mongoose = require('mongoose');
// require('dotenv').config({ path: './config/.env' });

// mongoose.connect(process.env.DB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', () => console.log('Mongodb connected'));

// // middleware
// api.use(cors());
// api.use('/user', userRoutes);
// api.use('/auth', authRoutes);
// api.use(userRoutes);
// api.use(helmet());
// api.use(morgan('common'));

// api.use(express.json());
// api.listen(5000, () => console.log('Api listening'));
