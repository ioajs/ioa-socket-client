'use strict';

class Task {
   connect(ctx) {

      console.log("Task connect")

      ctx.emit('/task/queue', 1);

   }
   async update(ctx) {

      ctx.emit('/task/queue', 1);

   }
   async end() {

      users.load();

   }
}

module.exports = Task;