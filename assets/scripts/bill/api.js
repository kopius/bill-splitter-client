'use strict';

const app = require('../app');

// Send GET request to server to get all Bills belonging to user
const indexBills = () => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/bills',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

// Send GET request to server to get a Bill with a specific ID
const showBill = (id) => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/bills/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

// Send POST request to server to create new Bill using form data
const createBill = (data) => {
  let token = app.user.token;
//   let request = {
    // url: app.host + '/bills',
    // method: 'POST',
    // headers: {
    //   Authorization: 'Token token=' + token,
    // },
    // data: data,
//    };
      // return $.ajax(request);

  return new Promise((resolve, reject) => {
    let request = {
      url: app.host + '/bills',
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + token
      },
      data,
      success(data) {
        resolve(data);
      },
      error(jqxhr, textStatus, errorThrown) {
        reject({
          jqxhr: jqxhr,
          textStatus: textStatus,
          errorThrown: errorThrown
        });
      }
    };
    console.log('request is:', request);
    return $.ajax(request);
  });
};

// Send PATCH request to server to create new Bill using form data
const updateBill = (totalAmount) => {
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
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/bills/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

const createShare = (data) => {
  // let token = app.user.token;
  // let id = data.share.bill_id;
  // return $.ajax({
  //   url: app.host + `/bills/${id}/shares`,
  //   method: 'POST',
  //   headers: {
  //     Authorization: `Token token=${token}`,
  //   },
  //   data: data,
  // });


  return new Promise((resolve, reject) => {
    let host = app.host;
    let token = app.user.token;
    let billId = data.share.bill_id;
    return $.ajax({
      url: `${host}/bills/${billId}/shares`,
      method: 'POST',
      headers: {
        Authorization: `Token token=${token}`
      },
      data,
      success(data) {
        resolve(data);
      },
      error(jqxhr, textStatus, errorThrown) {
        reject({
          jqxhr: jqxhr,
          textStatus: textStatus,
          errorThrown: errorThrown
        });
      }
    });
  });
};

const indexShares = (billId) => {
  // let token = app.user.token;
  // return $.ajax({
  //   url: app.host + `/bills/${billId}/shares`,
  //   method: 'GET',
  //   headers: {
  //     Authorization: `Token token=${token}`,
  //   }
  // });

  return new Promise((resolve, reject) => {
    let host = app.host;
    let token = app.user.token;
    return $.ajax({
      url: `${host}/bills/${billId}/shares`,
      method: 'GET',
      headers: {
        Authorization: `Token token=${token}`
      },
      success(data) {
        resolve(data);
      },
      error(jqxhr, textStatus, errorThrown) {
        reject({
          jqxhr: jqxhr,
          textStatus: textStatus,
          errorThrown: errorThrown
        });
      }
    });
  });
};

module.exports = {
  indexBills,
  showBill,
  createBill,
  updateBill,
  deleteBill,
  createShare,
  indexShares,
};
