'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')
// const store = require('./store')

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

const onAddCar = function (event) {
  event.preventDefault()
  ui.addCarSuccess()
}

const onCreateCar = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api
    .createCar(data)
    .then(ui.createCarSuccess)
    .catch(ui.createCarFailure)
}

const onShowCars = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showCars(data)
    .then(ui.showCarSuccess)
    .catch(ui.showCarFailure)
}

const onUpdateCar = function (event) {
  event.preventDefault()
  ui.updateCarSuccess()
}

const onCarUpdate = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  const id = data.car.id
  api
    .updateCar(data, id)
    .then(ui.carUpdateSuccess)
    .catch(ui.carUpdateFailure)
}

const onDeleteCar = function (event) {
  event.preventDefault()
  ui.deleteCarSuccess()
}

const onCarDelete = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api
    .deleteCar(data.car.id)
    .then(ui.carDeleteSuccess)
    .catch(ui.carDeleteFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onAddCar,
  onCreateCar,
  onShowCars,
  onUpdateCar,
  onCarUpdate,
  onDeleteCar,
  onCarDelete
}
