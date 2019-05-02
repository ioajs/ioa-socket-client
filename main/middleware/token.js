'use strict';

module.exports = async function (ctx, next) {

   console.log(999);

   await next();
   
}