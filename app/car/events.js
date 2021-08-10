'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')
// const store = require('./store')
//  const { store } = require('./../store')

// Sign Up
const onSignUp = function (event) {
  event.preventDefault()
  // get info from event and form
  const form = event.target
  console.log(form)
  const data = getFormFields(form)
  console.log(data)
  // make an api call using AJAX
  // handle successful api call with .then
  // handle failed api call with .catch
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

// Sign In
const onSignIn = function (event) {
  event.preventDefault()
  // get info from event and form
  const form = event.target
  // make an api call using AJAX
  // handle successful api call with .then
  // handle failed api call with .catch
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInSuccess)
}

// Sign Out
const onSignOut = function (event) {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

// Change Password
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api
    .changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}
const onCreateCar = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api
    .createShoe(data)
    .then(ui.onCreateShoeSuccess)
    .catch(ui.onCreateShoeFailure)
}

const onReadCars = function (event) {
  event.preventDefault()
  api.readShoe.index()
    .then(ui.onReadShoesSuccess)
    .catch(ui.onReadShoesFailure)
}

const onReadCar = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.readShoe(data)
    .then(ui.onReadShoeSuccess)
    .catch(ui.onReadShoeFailure)
}

const onUpdateCar = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.shoe.id
  api
    .updateShoe(data, id)
    .then(ui.onUpdateShoeSuccess)
    .catch(ui.onUpdateShoeFailure)
}

const onDeleteCar = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api
    .deleteShoe(data.shoe.id)
    .then(ui.onDeleteShoeSuccess)
    .then(ui.onDeleteShoeFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onReadCar,
  onReadCars,
  onCreateCar,
  // onShowCars,
  onUpdateCar,
  onDeleteCar

}
