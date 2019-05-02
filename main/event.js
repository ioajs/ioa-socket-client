'use strict';

const app = require('@app');

const { socket } = app;

socket.on('connect', function () {

   socket.emit('/task/queue', 1);

});

// socket.on('disconnect', function () {

// });