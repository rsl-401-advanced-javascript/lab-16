'use strict';

require('./events/handlers/logger');
require('./events/handlers/error');
require('./events/handlers/read');
require('./events/handlers/write');
require('./events/handlers/upper');
const eventHub = require('./events/event-hub');

/**
 * Uppercase a file's contents
 * @param {string} file - A filename
 */
const alterFile = (file) => {
  eventHub.emit('read', file);
};

/**
 * A filename
 * @file - a filename passed by the cli
 */
let file = process.argv.slice(2).shift();
alterFile(file);