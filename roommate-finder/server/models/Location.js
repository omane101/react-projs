const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Location', LocationSchema);
