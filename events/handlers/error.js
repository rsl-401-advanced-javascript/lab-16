'use strict';

const eventHub = require('../event-hub');


const errorHandler = err => {
  throw new Error(err);
}

eventHub.on('error', errorHandler);
module.exports = errorHandler;