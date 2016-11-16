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
const populateShareTemplate = (share) => {
  let person_name = share.person_name;
  let amountOwed = Number(share.adjusted_cost).toFixed(2);
  // let shareHTML = '<p>' + share.person_name + ' owes $' + share.base_cost + '</p>';
  let shareHTML = `<p>${person_name} owes $${amountOwed}</p>`;
  return shareHTML;
};

// Display new HTML for an individual share
const appendShareToSummary = (share) => {
  $('#shares-list').append(populateShareTemplate(share));
};

/* iterate over an array of share objects, plug their values into an HTML
  template, and append the new HTML to a container on the share summary view */
const displayShares = () => {
  let shares = app.currentShares;
  shares.forEach(appendShareToSummary);
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
  billHMTL += 'total cost of $' + Number(bill.total_amount).toFixed(2) + '</p>';
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
  console.log('in createBillSuccess, data is:', data);
  app.bill = data.bill;
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
  // clear shares from share summary
  clearSharesFromView();
};

// Respond to a failed bill update amount attempt
const updateBillAmountFailure = (error) => {
  console.error(error);
};

const deleteBillSuccess = () => {
  app.bill = null;
  clearSharesFromView();
  showMainMenuView();
};

const deleteBillFailure = (error) => {
  console.error(error);
};

const indexSharesSuccess = (data) => {
  console.log('in indexSharesSuccess, data is:', data);
  app.currentShares = data;
  displayShares();
};

module.exports = {
  showMainMenuView,
  showLookUpBillView,
  showGetNamesView,
  showGetTotalAmountView,
  displayShares,
  showWorkingShareSummaryView,
  showChangeTotalAmountView,
  clearSharesFromView,
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
  indexSharesSuccess,
};
