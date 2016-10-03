'use strict';

const app = require('../app');
const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onGetNumPeopleView = (event) => {
  event.preventDefault();
  ui.showGetNumPeopleView();
};

const onSubmitNumPeople = (event) => {
  event.preventDefault();
  let numPeople = getFormFields(event.target);
  let bill = {'num_people': numPeople};
  app.currentBill = bill;
  console.log('app.currentBill is', app.currentBill);
};

const onSubmitGroupNames = (event) => {
  event.preventDefault();
};

const onSubmitTotalAmount = (event) => {
  event.preventDefault();
};

const onSubmitBillInfo = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);


  api.createBill(data)
    .done(ui.createBillSuccess)
    .fail(ui.createBillFailure);
};

// Add event handlers for bill-related buttons & forms
const addHandlers = () => {
  $('#get-num-people-view-button').on('click', onGetNumPeopleView);
  $('#get-num-people').on('submit', onSubmitNumPeople);
  $('#get-group-names').on('submit', onSubmitGroupNames);
  $('#get-total-amount').on('submit', onSubmitTotalAmount);
};

module.exports = {
  addHandlers,
};
