'use strict';

const authEvents = require('./auth/events');
const authUI = require('./auth/ui');
const billEvents = require('./bill/events');

// On document ready
$(() => {
  // add event handlers
  authEvents.addHandlers();
  billEvents.addHandlers();

  // set view state for landing page
  authUI.showLandingView();
});
