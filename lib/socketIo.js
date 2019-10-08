"use strict";

const app = require('@app');
const logger = require('loggercc');
const ioClient = require('socket.io-client');

const { url } = app.config;

logger.log(`socket server: ${url}`);

const socketIo = ioClient.connect(`${url}`);

module.exports = socketIo;