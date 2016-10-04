'use strict';

const app = require('../app');

// Clear input values from all forms
const clearFormFields = function () {
  $('input').not('.submit').val('');
};

// Clear all forms and hide all views
const clearView = () => {
  clearFormFields();
  $('#container-main').find('.view-box').hide();
};

// const showGetNumPeopleView = () => {
//   clearView();
//   $('#get-num-people-view').show();
// };

// Display view for user to enter names of group members
const showGetNamesView = () => {
  clearView();
  $('#get-group-names-view').show();
};

const showGetTotalAmountView = () => {
  clearView();
  $('#get-total-amount-view').show();
};

// Display a summary of the current share breakdown
const showWorkingShareSummaryView = () => {
  clearView();
  $('#working-share-summary-view').show();
};

// Respond to a successful bill creation attempt
const createBillSuccess = (data) => {
  console.log('you are in ui.createBillSuccess');
  app.bill = data.bill;
  console.log("app.bill is", app.bill);
};

// Respond to a failed bill creation attempt
const createBillFailure = () => {
};

module.exports = {
  // showGetNumPeopleView,
  showGetNamesView,
  showGetTotalAmountView,
  showWorkingShareSummaryView,
  createBillSuccess,
  createBillFailure,
};
