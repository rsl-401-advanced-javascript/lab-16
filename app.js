'use strict';

require('./events/handlers/logger');
require('./events/handlers/error');
require('./events/handlers/read');
require('./events/handlers/write');
require('./events/handlers/upper');
const eventHub = require('./events/event-hub');

const alterFile = (file) => {
  eventHub.emit('read', file);
};

let file = process.argv.slice(2).shift();
alterFile(file);