"use strict";

const app = require('@app');
const logger = require('loggercc');
const routerMiddleware = require('ioa-router');
const { WebSocket } = require('ioa-router/lib/common.js');

const { socketIo } = app;

socketIo.on('connect', function () {

   logger.success(`socket connect`);

});

socketIo.on('disconnect', () => {

   logger.error(`socket connect`);

});

for (const onPath of WebSocket) {

   socketIo.on(onPath, async body => {

      const ctx = {
         path: onPath,
         method: "WebSocket",
         request: { body },
         emit(...args) {
            socketIo.emit(...args);
         },
      }

      await routerMiddleware(ctx);

      if (ctx.body) {
         socketIo.emit(onPath, ctx.body);
      }

   });

}