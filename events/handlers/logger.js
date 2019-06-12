'use strict';

const eventHub = require('../event-hub');

eventHub.on('log', logger);

module.exports = logger = message => console.log(message);