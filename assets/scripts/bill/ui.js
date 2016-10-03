'use strict';

const app = require('../app');

const createBillSuccess = (data) => {
  console.log('you are in ui.createBillSuccess');
  app.bill = data.bill;
  console.log("app.bill is", app.bill);
};

const createBillFailure = () => {

};

module.exports = {
  createBillSuccess,
  createBillFailure,
};
