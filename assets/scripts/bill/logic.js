'use strict';

const app = require('../app');

const filterBlankNames = (names) => {
  return names.filter(name => name);
};

const processNames = (data) => {
  let names = [app.userName];
  for (let key in data.names) {
    names.push(data.names[key]);
  }
  names = filterBlankNames(names);
  let num_people = names.length;
  app.currentBill = {'num_people': num_people};
  app.names = names;
};

// build up a collection of shares to be posted to the server
const buildShareObjects = () => {
  let names = app.names;
  let shares = [];
  let billId = app.bill.id;
  let totalAmount = app.bill.total_amount;
  let numPeople = app.bill.num_people;
  let baseCost = (totalAmount / numPeople).toFixed(2);
  let remainder = totalAmount - (baseCost * numPeople);
  names.forEach(function(name, index) {
    // if the total amount doesn't divide evenly, user pays the extra few cents
    if (remainder && name === app.userName) {
      baseCost += remainder;
    }
    let share = {
                 'bill_id': billId,
                 'person_name': name,
                 'base_cost': baseCost,
                };
    shares.push(share);
  });
  // only need to do one of these:
  app.shares = shares;
  return shares;
};

module.exports = {
  processNames,
  buildShareObjects,
};
