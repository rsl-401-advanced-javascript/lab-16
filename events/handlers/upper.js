'use strict';

const eventHub = require('../event-hub');

/**
 * Convert the buffer into a string and upperCase it
 * @param {object} data 
 */
const upper = data => {
  try {
    let text = data.buffer.toString().toUpperCase();
    eventHub.emit('write', {
      text,
      file: data.file
    });
  } catch (err) {
    eventHub.emit('error', err);
  }
};

eventHub.on('upper', upper);
module.exports = upper;