'use strict';

const eventHub = require('../event-hub');

module.exports = errorHandler = () => {
  eventHub.on('error', err => {
    eventHub.emit('log', err);
  });
}