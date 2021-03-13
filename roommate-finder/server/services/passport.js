const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = function (passport) {
  passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) {
          return done(err);
        }
        // no user found
        if (!user) {
          return done(null, false, { error: 'Incorrect Username' });
        }
        // compare password to hashed password
        bcrypt.compare(password, user.password, (err, res) => {
          if (err) throw err;
          if (res === true) {
            // res === true, there is a match
            return done(null, user);
          } else {
            // no match, bad password
            return done(null, false, { error: 'Incorrect Password' });
          }
        });
      });
    })
  );
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
