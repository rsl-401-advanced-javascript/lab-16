'use strict';

const eventHub = require('../event-hub');
const util = require('util');
const fs = require('fs');
const fsReadFile = util.promisify(fs.readFile);

const read = async file => {
  try {
    const buffer = await fsReadFile(file);
    eventHub.emit('upper', {
      buffer,
      file
    });
  } catch (err) {
    eventHub.emit('error', err);
  }
};

eventHub.on('read', read);
module.exports = read;