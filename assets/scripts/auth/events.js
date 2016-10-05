'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

//
const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.signUpFailure);
};

//
const onSignInView = (event) => {
  event.preventDefault();
  console.log('you are in onSignInView');
  ui.showSignInView();
};

//
const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.signInFailure);
};

//
const onSignOut = function (event) {
  event.preventDefault();

  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.signOutFailure);
};

const onMainMenuView = (event) => {
  event.preventDefault();
  ui.showMainMenuView();
};

//
const onChangePasswordView = (event) => {
  event.preventDefault();
  ui.showChangePasswordView();
};

//
const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.changePasswordFailure);
};

//
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in-view-button').on('click', onSignInView);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out-button').on('click', onSignOut);
  $('#change-password-view-button').on('click', onChangePasswordView);
  $('#change-password').on('submit', onChangePassword);
  $('#main-menu-button').on('click', onMainMenuView);
};

module.exports = {
  addHandlers,
};
