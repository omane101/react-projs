const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Location = require('../models/Location');

// GET api/locations
// returns all locations in the database
// @private
router.get('/', async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ error: 'Server Error, unable to find Locations' });
  }
});

// POST api/locations
// add a location to database with city, state
// @private
router.post('/', async (req, res) => {
  const { city, state } = req.body;
  try {
    // try to locate existing location
    const loc = await Location.findOne({
      city: city,
      state: state,
    });
    // location already exists
    if (loc) {
      res.status(400).json({ error: 'Locaiton Already Exists' });
    }
    // location doesn't exist, create one
    else {
      const newLocation = new Location({
        city: city,
        state: state,
      });
      await newLocation.save();
      res.status(200).json(newLocation);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: `Cannot find Location matching ${city} and ${state}`,
    });
  }
});

module.exports = router;
