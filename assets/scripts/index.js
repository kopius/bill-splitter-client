'use strict';

const authEvents = require('./auth/events.js');
const billEvents = require('./bill/events');

// On document ready
$(() => {
  authEvents.addHandlers();
  billEvents.addHandlers();

  // set view state for landing page
  // $('#sign-up').hide();
  $('#sign-in').hide();
  $('#change-password').hide();
  $('#sign-out').hide();
  $('#get-initial-bill-info').hide();
});
