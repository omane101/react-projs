const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const passport = require('passport');
const connectDb = require('./config/connectDb');
require('dotenv').config();

// conenct mongoDb
const connection = connectDb(process.env.MONGO_URI);
// create express app
const app = express();
// MIDDLEWARE ===========================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(
  session({
    secret: 'secretcode',
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // one week, expressed in ms
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

// ROUTES ===========================================

app.get('/', (req, res) => {
  res.status(200).json({ message: 'App Running' });
});

app.use('/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/locations', require('./routes/locations'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}`));
