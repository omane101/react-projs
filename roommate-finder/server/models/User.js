const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  _location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
    required: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
