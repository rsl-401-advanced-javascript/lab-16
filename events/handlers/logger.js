'use strict';

const eventHub = require('../event-hub');

/**
 * Logs the specified message
 * @param {string} message 
 */
const logHandler = message => console.log(message);

eventHub.on('log', logHandler);
module.exports = logHandler;