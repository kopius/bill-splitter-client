'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onSubmitBillInfo = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.createBill(data)
    .done(ui.createBillSuccess)
    .fail(ui.createBillFailure);
};

// Add event handlers for bill-related buttons & forms
const addHandlers = () => {
  $('#get-initial-bill-info').on('submit', onSubmitBillInfo);
};

module.exports = {
  addHandlers,
};
