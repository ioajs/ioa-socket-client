'use strict';

module.exports = {
   /**
    * 每次建立连接时主动请求任务
    */
   connection() {

      this.emit('queue', 1);

   },
   /**
    * 任务更新通知
    */
   async update() {

      this.emit('queue', 1);

   },
   async end() {

      users.load();

   },
}