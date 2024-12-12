const mongoose = require('mongoose');

/**
 * Get the current status of the MongoDB connection.
 * @returns {string} Connection status: 'disconnected', 'connected', 'connecting', or 'disconnecting'.
 */
function getConnectionStatus() {
  const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];
  return states[mongoose.connection.readyState];
}

module.exports = { getConnectionStatus };
