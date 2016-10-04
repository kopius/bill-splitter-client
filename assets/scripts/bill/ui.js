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

// Display the main menu
const showMainMenuView = () => {
  clearView();
  $('#navigation-bar').show();
  $('#main-menu-view').show();
};

const showLookUpBillView = () => {
  clearView();
  $('#look-up-bill-view').show();
};

const showIndexBillsView = () => {
  clearView();
  $('#index-bills-view').show();
};

const showShowBillView = () => {
  clearView();
  $('#show-bill-view').show();
};

// Display view for user to enter names of group members
const showGetNamesView = () => {
  clearView();
  $('#get-group-names-view').show();
};

//
const showGetTotalAmountView = () => {
  clearView();
  $('#get-total-amount-view').show();
};

// Write new HTML for an individual share
const displayShareTemplate = (share) => {
  let shareHMTL = '<p>' + share.name + ' owes $' + share.amount + '</p>';
  return shareHMTL;
};

// Display new HTML for an individual share
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

//
const showChangeTotalAmountView = () => {
  clearView();
  $('#change-total-amount-view').show();
};

// Write new HTML for an individual share
const writeBillHTML = (bill) => {
  let billHMTL = '<p>Bill #' + bill.id + ': ' + bill.num_people + ' people, ';
  billHMTL += 'total cost of $' + bill.total_amount.toFixed(2) + '</p>';
  return billHMTL;
};

// Display new HTML for an individual share
const addBillHMTLtoView = (bill) => {
  $('#bills-list').append(writeBillHTML(bill));
};

/* iterate over an array of bill objects, plug their values into an HTML
  template, and append the new HTML to a container on the bills index view */
const displayBills = (bills) => {
  bills.forEach(addBillHMTLtoView);
};

const clearBillsFromView = () => {
  $('#bills-list').find('p').remove();
};

//
const indexBillsSuccess = (data) => {
  console.log('data is', data);
  let bills = data.bills;

  // clear any previously displayed bills
  clearBillsFromView();
  // generate HTML from data and append to indexBillsView
  displayBills(bills);
  // switch to indexBillsView
  showIndexBillsView();
};

//
const indexBillsFailure = (error) => {
  console.error(error);
};

//
const showBillSuccess = (data) => {
  console.log('data is', data);
  let bill = data.bill;

  $('#bill-display').find('p').remove();
  // generate HTML from data

  $('#bill-display').append(writeBillHTML(bill));
  // switch to indexBillsView
  showShowBillView();
};

//
const showBillFailure = (error) => {
  console.error(error);
};

// Respond to a successful bill creation attempt
const createBillSuccess = (data) => {
  console.log('you are in ui.createBillSuccess');
  app.bill = data.bill;
  console.log("app.bill is", app.bill);
};

// Respond to a failed bill creation attempt
const createBillFailure = (error) => {
  console.error(error);
};

const clearSharesFromView = () => {
  $('#shares-list').find('p').remove();
};

// Respond to a successful bill update amount attempt
const updateBillAmountSuccess = () => {
  console.log('you are in ui.updateBillSuccess');
  console.log("app.bill is", app.bill);

  // clear shares from share summary
  clearSharesFromView();
};

// Respond to a failed bill update amount attempt
const updateBillAmountFailure = (error) => {
  console.log('you are in updateBillAmountFailure');
  console.error(error);
};

const deleteBillSuccess = () => {
  console.log('you are in ui.deleteBillSuccess');
  app.bill = null;
  showMainMenuView();
  console.log('app.bill should be null. app.bill is:', app.bill);
};

const deleteBillFailure = (error) => {
  console.error(error);
};

module.exports = {
  showMainMenuView,
  showLookUpBillView,
  showGetNamesView,
  showGetTotalAmountView,
  displayShares,
  showWorkingShareSummaryView,
  showChangeTotalAmountView,
  indexBillsSuccess,
  indexBillsFailure,
  showBillSuccess,
  showBillFailure,
  createBillSuccess,
  createBillFailure,
  updateBillAmountSuccess,
  updateBillAmountFailure,
  deleteBillSuccess,
  deleteBillFailure,
};
