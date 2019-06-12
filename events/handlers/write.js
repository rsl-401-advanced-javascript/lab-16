'use strict';

const eventHub = require('../event-hub');
const util = require('util');
const fs = require('fs');
const fsWriteFile = util.promisify(fs.writeFile);

/**
 * Convert the text into a buffer and write it to the file
 * @param {object} data 
 */
const write = async data => {
  try {
    await fsWriteFile(data.file, Buffer.from(data.text));
    eventHub.emit('log', `${data.file} saved`);
  } catch (err) {
    eventHub.emit('error', err);
  }
};

eventHub.on('write', write);
module.exports = write;