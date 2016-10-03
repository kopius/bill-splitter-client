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

module.exports = {
  createBill,
};
