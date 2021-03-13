const mongoose = require('mongoose');

const connectDb = async (URI) => {
  try {
    const connection = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`Mongo connected at ${connection.connections[0].host}`);
    return connection;
  } catch (error) {
    console.log('MONGO ERROR');
    console.log(error);
  }
};

module.exports = connectDb;
