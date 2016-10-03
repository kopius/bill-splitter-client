'use strict';

const authEvents = require('./auth/events.js');
const billEvents = require('./bill/events');

// On document ready
$(() => {
  authEvents.addHandlers();
  billEvents.addHandlers();
});
