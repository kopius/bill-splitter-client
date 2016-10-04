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
  $('#landing-view').show();
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
  $('#navigation-bar').show();
  $('#main-menu-view').show();
};

// Parse the user's email to get a working username
const storeUserName = () => {
  let email = app.user.email;
  let stop = email.indexOf('@');
  let userName = email.charAt(0).toUpperCase() + email.slice(1, stop);
  app.userName = userName;
  console.log('app.userName is', app.userName);
};

// Respond to a successful sign-up attempt
const signUpSuccess = (data) => {
  console.log('you are in signUpSuccess');
  console.log('data is', data);
  // automatically sign user in
  // if password was persisted locally to facilitate auto sign-in, delete it now
  // display main menu
  showMainMenuView();
};

// Respond to a failed sign-up attempt
const signUpFailure = (error) => {
  console.error(error);
};

// Respond to a successful sign-in attempt
const signInSuccess = (data) => {
  // store new user in app.user
  app.user = data.user;
  console.log('you are in signInSuccess');
  console.log('app.user is', app.user);
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
  showSignInView();
};

// Respond to a failed sign-out attempt
const signOutFailure = (error) => {
  console.error(error);
};

// Respond to a successful attempt to change password
const changePasswordSuccess = () => {
  console.log('you are in changePasswordSuccess');
};

// Respond to a failed attempt to change password
const changePasswordFailure = (error) => {
  console.error(error);
};

module.exports = {
  showLandingView,
  showSignInView,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
};
