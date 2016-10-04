'use strict';

const app = require('../app');

// Send POST request to server to create new Bill using form data
const createBill = (data) => {
  console.log('you are in api.createBill');
  console.log("data is", data);
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/bills',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + token,
    },
    data: data,
  });
};

// Send PATCH request to server to create new Bill using form data
const updateBill = (totalAmount) => {
  console.log('you are in api.updateBill');
  console.log("totalAmount is", totalAmount);
  let id = app.bill.id;
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/bills/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + token,
    },
    data: {
      "bill": {
        "total_amount": totalAmount
      }
    },
  });
};

// send DELETE request to server to destroy Bill with specified ID.
const deleteBill = (id) => {
  console.log('you are in api.deleteBill');
  console.log('id is', id);
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/bills/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

module.exports = {
  createBill,
  updateBill,
  deleteBill,
};
