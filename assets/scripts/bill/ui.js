'use strict';

const app = require('../app');

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

const showGetNamesView = () => {
  clearView();
  $('#get-group-names-view').show();
};

const createBillSuccess = (data) => {
  console.log('you are in ui.createBillSuccess');
  app.bill = data.bill;
  console.log("app.bill is", app.bill);
};

const createBillFailure = () => {

};

module.exports = {
  // showGetNumPeopleView,
  showGetNamesView,
  createBillSuccess,
  createBillFailure,
};
