'use strict';

const eventHub = require('../event-hub');


const logHandler = message => console.log(message);

eventHub.on('log', logHandler);
module.exports = logHandler;