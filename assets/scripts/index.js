'use strict';

const authEvents = require('./auth/events.js');
const billEvents = require('./bill/events');

// On document ready
$(() => {
  authEvents.addHandlers();
  billEvents.addHandlers();

  // set view state for landing page
  $('#container-main').find('.view-box').hide();
  $('#landing-view').show();
  // $('#sign-up').hide();
  // $('#sign-in').hide();
  // $('#change-password').hide();
  // $('#sign-out').hide();
  // $('#get-initial-bill-info').hide();
});
