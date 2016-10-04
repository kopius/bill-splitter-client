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

// dummy function to return something with share info
const displayShareTemplate = (share) => {
  let shareHMTL = '<p>' + share.name + ' owes ' + share.amount + '</p>';
  return shareHMTL;
};

// write new HTML for displaying an individual share
const createShareHTMLFromTemplate = (share) => {
  $('#shares-list').append(displayShareTemplate(share));
};

/* iterate over an array of share objects, plug their values into an HTML
  template, and append the new HTML to a container on the share summary view */
const displayShares = () => {
  let shares = app.shares;
  shares.forEach(createShareHTMLFromTemplate);
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
  displayShares,
  showWorkingShareSummaryView,
  createBillSuccess,
  createBillFailure,
};
