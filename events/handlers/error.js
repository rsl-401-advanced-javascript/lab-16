'use strict';

const eventHub = require('../event-hub');

eventHub.on('error', errorHandler);

module.exports = errorHandler = err => eventHub.emit('log', err);