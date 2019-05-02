'use strict';

class Task {
   connect(ctx) {

      console.log("Task connect");

      ctx.emit('/task/queue', 666);

   }
   async queue(ctx) {

      const { body } = ctx.request;

      console.log(body);

   }
   async feedback() {

      const { body } = ctx.request;

      console.log(body);

   }
}

module.exports = Task;