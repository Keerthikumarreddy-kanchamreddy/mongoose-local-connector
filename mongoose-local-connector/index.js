const { connectToMongoDB } = require('./lib/connect');
const { getConnectionStatus } = require('./lib/status');

module.exports = { connectToMongoDB, getConnectionStatus };
