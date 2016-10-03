'use strict';

const app = require('../app');

//
const clearFormFields = function () {
  $('input').not('.submit').val('');
};

// Clear all forms and hide all views
const clearView = () => {
  clearFormFields();
  $('#container-main').find('.view-box').hide();
};

// Display the sign-in form
const showSignInView = () => {
  console.log('you are in showSignInView');
  clearView();
  $('#sign-in-view').show();
};

// Display the main menu
const showMainMenuView = () => {
  clearView();
  $('#main-menu-view').show();
};

//
const signUpSuccess = (data) => {
  console.log('you are in signUpSuccess');
  console.log('data is', data);
  // automatically sign user in
  // if password was persisted locally to facilitate auto sign-in, delete it now
  // display main menu
  showMainMenuView();
};

//
const signUpFailure = (error) => {
  console.error(error);
};

//
const signInSuccess = (data) => {
  // store new user in app.user
  app.user = data.user;
  console.log('you are in signInSuccess');
  console.log('app.user is', app.user);
  // display main menu
  showMainMenuView();
};

//
const signInFailure = function (error) {
  console.error(error);
};

//
const signOutSuccess = () => {
  // clear the user object and any text left in the authorization forms
  app.user = null;
  showSignInView();
};

//
const signOutFailure = (error) => {
  console.error(error);
};

//
const changePasswordSuccess = () => {
  console.log('you are in changePasswordSuccess');
};

//
const changePasswordFailure = (error) => {
  console.error(error);
};

module.exports = {
  signUpSuccess,
  signUpFailure,
  showSignInView,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
};
