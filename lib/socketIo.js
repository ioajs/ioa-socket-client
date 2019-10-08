"use strict";

const app = require('@app');
const consoln = require('consoln');
const ioClient = require('socket.io-client');

const { url } = app.config;

consoln.log(`socket server: ${url}`);

const socketIo = ioClient.connect(`${url}`);

module.exports = socketIo;