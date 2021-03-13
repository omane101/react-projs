const posts = [
  {
    title: 'A New Room Opening at 123 South St',
    description:
      'Looking for a fun open minded roommate to fill the room at 123 South St. Parking spot included, but no pets allowed, sorry!',
    location: {
      street: '123 South Street',
      city: 'Washington',
      state: 'District of Columbia',
    },
    // posible types = house, apartment
    housingType: 'house',
    amenities: {
      privateBath: true,
      roomFurnished: false,
      parkingIncluded: true,
      washerDryerInUnit: true,
      petsAllowed: false,
      wifi: true,
      cableTv: false,
      kitchen: true,
      poolAccess: false,
      accepts420: false,
    },
    likes: [{ id: '123456' }, { id: '456123' }, { id: '789789' }],
    _user: '123456',
    _postedInArea: '111222',
  },
];

module.exports = posts;
