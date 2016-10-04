'use strict';

const app = require('../app');
const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onGetNamesView = (event) => {
  event.preventDefault();
  ui.showGetNamesView();
};

// Parses name submissions into an array of names and stores array on app.
const onSubmitGroupNames = (event) => {
  event.preventDefault();

  let data = getFormFields(event.target);
  let names = [app.userName];
  for (let key in data.names) {
    names.push(data.names[key]);
  }
  let num_people = names.length;
  app.currentBill = {bill: {'num_people': num_people}};
  app.names = names;

  console.log('group names have been submitted:');
  console.log('app is', app);
};

const onSubmitTotalAmount = (event) => {
  event.preventDefault();
};

// const onSubmitBillInfo = (event) => {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//
//   api.createBill(data)
//     .done(ui.createBillSuccess)
//     .fail(ui.createBillFailure);
// };

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

// Add event handlers for bill-related buttons & forms
const addHandlers = () => {
  $('#get-names-view-button').on('click', onGetNamesView);
  $('#get-group-names').on('submit', onSubmitGroupNames);
  $('#get-total-amount').on('submit', onSubmitTotalAmount);
  setUpDynamicNameFields();
};

module.exports = {
  addHandlers,
};
