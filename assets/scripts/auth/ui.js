'use strict';

const app = require('../app');

// Clear all input data from form fields
const clearFormFields = function () {
  $('input').not('.submit').val('');
};

// Clear all forms and hide all views
const clearView = () => {
  clearFormFields();
  $('#container-main').find('.view-box').hide();
};

// Display the landing view with sign-up form
const showLandingView = () => {
  clearView();
  $('#navigation-bar').hide();
  $('#footer').hide();
  $('#landing-view').show();
};

// Display the sign-in form
const showSignInView = () => {
  clearView();
  $('#sign-in-view').show();
};

const clearBillInfoFromApp = () => {
   app.bill = null;
   app.currentBill = null;
   app.names = null;
   app.shares = null;
 };

// Display the main menu
const showMainMenuView = () => {
  clearView();
  clearBillInfoFromApp();
  $('#navigation-bar').show();
  $('#main-menu-view').show();
  $('#footer').show();
};

const showChangePasswordView = () => {
  clearView();
  $('#change-password-view').show();
};

// Parse the user's email to get a working username
const storeUserName = () => {
  let email = app.user.email;
  let stop = email.indexOf('@');
  let userName = email.charAt(0).toUpperCase() + email.slice(1, stop);
  app.userName = userName;
};

// Respond to a successful sign-up attempt
const signUpSuccess = (data) => {
  // automatically sign user in
  // if password was persisted locally to facilitate auto sign-in, delete it now
  // display main menu
  showSignInView();
};

// Respond to a failed sign-up attempt
const signUpFailure = (error) => {
  console.error(error);
};

// Respond to a successful sign-in attempt
const signInSuccess = (data) => {
  // store new user in app.user
  app.user = data.user;
  storeUserName();
  // display main menu
  showMainMenuView();
};

// Respond to a failed sign-in attempt
const signInFailure = function (error) {
  console.error(error);
};

// Respond to a successful sign-out attempt
const signOutSuccess = () => {
  // clear the user object and any text left in the authorization forms
  app.user = null;
  showLandingView();
};

// Respond to a failed sign-out attempt
const signOutFailure = (error) => {
  console.error(error);
};

// Respond to a successful attempt to change password
const changePasswordSuccess = () => {
  showMainMenuView();
};

// Respond to a failed attempt to change password
const changePasswordFailure = (error) => {
  console.error(error);
};

module.exports = {
  showLandingView,
  showSignInView,
  showMainMenuView,
  showChangePasswordView,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
};
