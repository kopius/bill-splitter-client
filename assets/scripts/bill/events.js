'use strict';

const app = require('../app');
const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const logic = require ('./logic');

//
const onLookUpBillView = (event) => {
  event.preventDefault();
  ui.showLookUpBillView();
};

//
const onIndexBillsView = (event) => {
  event.preventDefault();

  api.indexBills()
    .done(ui.indexBillsSuccess)
    .fail(ui.indexBillsFailure);
};

//
const onGetBillById = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  let id = data.bill.id;

  api.showBill(id)
    .done(ui.showBillSuccess)
    .fail(ui.showBillFailure);
};

//
const submitShareInfo = () => {
  /*
  Stretch goal for this function:

  Loop through the names array and initiate a POST request for each name,
  including the name and bill_id as the data for each request, like so:
  data = {share: {name: 'Alex', bill_id: 8}}

    Write an api function that initiates the POST requests via AJAX

    Create an array 'shares' on app. As each new share object is returned, push
    it into this array.

    Write a ui function that iterates over the shares and creates HTML for
    each. Append each new element to the working-share-summary-view.

  When the loop is complete, the summary view may be displayed.
  */

  // For prototype, use local logic to create and display Shares
  logic.createShares();
  ui.displayShares();
};

//
const submitBillInfo = () => {
  let data = {};
  data.bill = app.currentBill;
  api.createBill(data)
    .done(ui.createBillSuccess)
    .done(submitShareInfo)
    .done(ui.showWorkingShareSummaryView)
    .fail(ui.createBillFailure);
};

//
const onGetNamesView = (event) => {
  event.preventDefault();
  ui.showGetNamesView();
};

// Parses name submissions into an array of names and stores array on app.
const onSubmitGroupNames = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  logic.processNames(data);
  ui.showGetTotalAmountView();
};

//
const onSubmitTotalAmount = (event) => {
  event.preventDefault();

  // extract the total cost of the meal from the form submission and save on app
  let data = getFormFields(event.target);
  let bill = data.bill;
  app.currentBill.total_amount = bill.total_amount;

  submitBillInfo();
};

//
const setUpDynamicNameFields = () => {
  let next = 1;
  $(".add-more").click(function(event){
      event.preventDefault();
      // create a new, incremented ID for the next input
      let addto = "#field" + next;
      // do this again to get an ID for the minus button that will go next to
      // the new input field
      let addRemove = "#field" + (next);
      // increment the 'next' value
      next = next + 1;
      // write HTML for a new input field and assign it to a variable
      let newIn = '<input autocomplete="off" class="name-input form-control" id="field' + next + '" name="names[' + next + ']" type="text">';
      // select the new HTML input element with jQuery and assign this to a variable
      let newInput = $(newIn);
      // write HTML for a new remove-field button and assign it to a variable
      let removeBtn = '<button id="remove' + (next - 1) + '" class="btn form-control remove-me" >-</button></div><div id="field">';
      // select the new HTML nutton eelement with jQuery and assign this to a variable
      let removeButton = $(removeBtn);
      // add the new input field after the previos one
      $(addto).after(newInput);
      // add the new removal button after the previous one
      $(addRemove).after(removeButton);
      // give the new input field the same data-source attribute as the previous one
      $("#field" + next).attr('data-source',$(addto).attr('data-source'));
      // update the value of the hidden count input
      $("#count").val(next);

          // add a click listener to the new field-remove button
          // this can be factored out later
          $('.remove-me').click(function(event){
              event.preventDefault();
              let fieldNum = this.id.charAt(this.id.length-1);
              let fieldID = "#field" + fieldNum;
              $(this).remove();
              $(fieldID).remove();
          });
  });
};

//
const onChangeTotalAmountView = (event) => {
  event.preventDefault();
  ui.showChangeTotalAmountView();
};

//
const onChangeTotalAmount = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  let totalAmount = data.bill.total_amount;
  app.bill.total_amount = totalAmount;

  api.updateBill(totalAmount)
    .done(ui.updateBillAmountSuccess)
    .done(submitShareInfo)
    .done(ui.showWorkingShareSummaryView)
    .fail(ui.updateBillAmountFailure);
};

//
const onDeleteNewBill = (event) => {
  event.preventDefault();
  let id = app.bill.id;
  api.deleteBill(id)
    .done(ui.deleteBillSuccess)
    .fail(ui.deleteBillFailure);
};

const onSaveNewBill = () => {
  clearSharesFromView();
  ui.showMainMenuView();
  app.currentBill = null;
  app.bill = null;
};

// Add event handlers for bill-related buttons & forms
const addHandlers = () => {
  $('#look-up-bill-view-button').on('click', onLookUpBillView);
  $('#index-bills-view-button').on('click', onIndexBillsView);
  $('#get-bill-by-id').on('submit', onGetBillById);
  $('#get-names-view-button').on('click', onGetNamesView);
  $('#get-group-names').on('submit', onSubmitGroupNames);
  $('#get-total-amount').on('submit', onSubmitTotalAmount);
  setUpDynamicNameFields();
  $('#change-total-amount-view-button').on('click', onChangeTotalAmountView);
  $('#change-total-amount').on('submit', onChangeTotalAmount);
  $('#delete-new-bill-button').on('click', onDeleteNewBill);
  $('#save-new-bill-button').on('click', onSaveNewBill);
};

module.exports = {
  addHandlers,
};
