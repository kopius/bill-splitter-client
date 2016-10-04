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

  console.log('group names have been submitted:');
  console.log('app is', app);
};

const createShares = () => {
  let names = app.names;
  let shares = [];
  let totalAmount = app.bill.total_amount;
  let numPeople = app.bill.num_people;
  let amountPerShare = (totalAmount / numPeople);

  names.forEach(function(name, index) {
    let share = {'id': index,
                 'name': name,
                 'amount': amountPerShare};
    shares.push(share);
  });
  app.shares = shares;
  console.log('in createShares, app is', app);
};

module.exports = {
  processNames,
  createShares,
};
