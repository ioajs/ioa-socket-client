'use strict';

const { router } = require('@app');

router.on('/task/update', 'task.update');

router.on('/task/end', 'task.end');

router.on('connect', 'task.connect');