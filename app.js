'use strict';

require('./events/handlers/logger');
require('./events/handlers/error');
const eventHub = require('./events/event-hub');
const fs = require('fs');

const alterFile = (file) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      eventHub.emit('error', err);
    }
    let text = data.toString().toUpperCase();
    fs.writeFile(file, Buffer.from(text), (err, data) => {
      if (err) {
        eventHub.emit('error', err);
      }
      eventHub.emit('log', `${file} saved`);
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);