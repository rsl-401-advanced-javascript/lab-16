'use strict';

const eventHub = require('../event-hub');


const errorHandler = err => eventHub.emit('log', err);

eventHub.on('error', errorHandler);
module.exports = errorHandler;