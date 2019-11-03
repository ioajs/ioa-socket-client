'use strict';

const { router } = require('@app');

router.on('connect', 'task.connect');

router.on('/task/queue', 'token', 'task.queue');

router.on('/task/feedback', 'token', 'task.feedback');
