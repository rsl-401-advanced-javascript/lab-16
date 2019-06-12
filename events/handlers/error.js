'use strict';

const eventHub = require('../event-hub');

/**
 * Throws the error
 * @param {error} err 
 */
const errorHandler = err => {
  throw new Error(err);
}

eventHub.on('error', errorHandler);
module.exports = errorHandler;