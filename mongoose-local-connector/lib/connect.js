const mongoose = require('mongoose');

/**
 * Connect to MongoDB using the given configuration or environment variables.
 * @param {Object} config - Configuration object for MongoDB connection.
 * @param {string} config.host - MongoDB host (default: 'localhost').
 * @param {number} config.port - MongoDB port (default: 27017).
 * @param {string} config.dbName - Database name.
 * @param {Object} config.options - Additional mongoose options.
 */
async function connectToMongoDB(config = {}) {
  const {
    host = process.env.MONGO_HOST || '127.0.0.1',
    port = process.env.MONGO_PORT || 27017,
    dbName = process.env.MONGO_DB_NAME || 'test',
    options={}
  } = config;

  const uri = `mongodb://${host}:${port}/${dbName}`;

  try {
    await mongoose.connect(uri, options);
    console.log(`Connected to MongoDB at ${uri}`);
  } catch (error) {
    console.error(`Failed to connect to MongoDB: ${error.message}`);
    throw error;
  }
}

module.exports = { connectToMongoDB };
