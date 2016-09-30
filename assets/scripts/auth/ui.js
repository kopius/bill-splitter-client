'use strict';

const app = require('../app');

const clearFormFields = function () {
  $('form').find('input[type=password]').val('');
  $('form').find('input[type=email]').val('');
};


const signUpSuccess = (data) => {
  console.log('you are in signUpSuccess');
  console.log('data is', data);
  // automatically sign user in
  // if password was persisted locally to facilitate auto sign-in, delete it now
  // display main menu
};


const signUpFailure = (error) => {
  console.error(error);
};


const signInSuccess = (data) => {
  // store new user in app.user
  app.user = data.user;
  console.log('you are in signInSuccess');
  console.log('app.user is', app.user);
  // display main menu
};


const signInFailure = function (error) {
  console.error(error);

};


const signOutSuccess = () => {
  // clear the user object and any text left in the authorization forms
  app.user = null;
  clearFormFields();
};


const signOutFailure = (error) => {
  console.error(error);
};


const changePasswordSuccess = () => {
  console.log('you are in changePasswordSuccess');
};


const changePasswordFailure = (error) => {
  console.error(error);
};


module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
};
