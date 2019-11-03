"use strict";

const app = require('@app');
const consoln = require('consoln');
const routerMiddleware = require('ioa-router');
const { Subscribe } = require('ioa-router/lib/common.js');

const { socketIo } = app;

socketIo.on('connect', function () {

   consoln.success(`socket connect`);

});

socketIo.on('disconnect', () => {

   consoln.error(`socket connect`);

});

for (const onPath of Subscribe) {

   socketIo.on(onPath, async body => {

      const ctx = {
         path: onPath,
         method: "Subscribe",
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