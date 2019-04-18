"use strict"

const logger = require('loggercc');
const socketIo = require('socket.io-client');
const app = require('@app');

module.exports = function (directory) {

   const { url } = app.config;

   logger.log(`socket: ${url}`);

   for (const name in directory) {

      const controller = directory[name];

      const { connection } = controller;

      if (connection) {
         delete controller.connection;
      }
      
      const socket = socketIo.connect(`${url}${name}`);

      socket.on('connect', function () {

         logger.success(`socket connection ./${name}`);

         if (connection) {
            connection.call(socket);
         }

      });

      socket.on('disconnect', () => {
         logger.error(`socket disconnect ./${name}`);
      });

      for (const name in controller) {

         const value = controller[name];

         if (typeof value === 'function') {
            socket.on(name, value.bind(socket));
         }

      }

      // emit代理
      controller.emit = function (...args) {
         socket.emit(...args);
      };

   }

   return directory;

}