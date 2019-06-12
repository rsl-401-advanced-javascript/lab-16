'use strict';
jest.mock('fs');
const fs = require('fs');
const read = require('../events/handlers/read');
const upper = require('../events/handlers/upper');
const write = require('../events/handlers/write');
const logger = require('../events/handlers/logger');
const eventHub = require('../events/event-hub');

describe('AlterFile', () => {
  const file = 'test.txt';

  it('Read should emit the upper event', async () => {
    const handler = jest.fn();
    eventHub.on('upper', handler);
    await read(file);
    expect(handler).toHaveBeenCalled();
  });

  it('Upper should emit the write event', async () => {
    const handler = jest.fn();
    eventHub.on('write', handler);
    const buffer = Buffer.from('hello world!');
    await upper({
      buffer,
      file
    });

    expect(handler).toHaveBeenCalled();
  });

  it('Write should emit the log event', async () => {
    const handler = jest.fn();
    eventHub.on('log', handler);
    await write({
      text: 'HELLO WORLD!',
      file
    });

    expect(handler).toHaveBeenCalled();
  });

  it('Log should console.log a message', () => {
    jest.spyOn(console, 'log');

    logger(`${file} saved`);

    expect(console.log).toHaveBeenCalledWith(`${file} saved`);
  });
});