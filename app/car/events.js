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
  // console.log(form)
  const data = getFormFields(form)
  // console.log(data)
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
    // handle successful api call with .then
    // handle failed api call with .catch
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

// Change Password
const onChangePassword = function (event) {
  // get info from event and form
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    // make an api call using AJAX
    // handle successful api call with .then
    // handle failed api call with .catch
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

// Create Car
const onCreateCar = function (event) {
  // get info from event and form
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createCar(data)
    // make an api call using AJAX
    // handle successful api call with .then
    // handle failed api call with .catch
    .then(api.readCars)
    .then(ui.onReadCarsSuccess)
    .catch(ui.onReadCarsFailure)
    .then(ui.onCreateCarSuccess)
    .catch(ui.onCreateCarFailure)
}

// Read Car
const onReadCars = function (event) {
  // get info from event and form
  event.preventDefault()
  api.readCars()
    // make an api call using AJAX
    // handle successful api call with .then
    // handle failed api call with .catch
    .then(ui.onReadCarsSuccess)
    .catch(ui.onReadCarsFailure)
}

// Update Car
const onUpdateCar = function (event) {
  // get info from event and form
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  const id = data.car.id
  api.updateCar(id, data)
    // make an api call using AJAX
    // handle successful api call with .then
    // handle failed api call with .catch
    .then(api.readCars)
    .then(ui.onReadCarsSuccess)
    .catch(ui.onReadCarsFailure)
    .then(ui.onUpdateCarSuccess)
    .catch(ui.onUpdateCarFailure)
}

// Delete Car
const onDeleteCar = function (event) {
  // get info from event and form
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteCar(data.car.id)
    // make an api call using AJAX
    // handle successful api call with .then
    // handle failed api call with .catch
    .then(api.readCars)
    .then(ui.onReadCarsSuccess)
    .catch(ui.onReadCarsFailure)
    .then(ui.onDeleteCarSuccess)
    .catch(ui.onDeleteCarFailure)
}

// Show Every Car That Is Available
const showForm = function (event) {
  const btnId = $(event.target).attr('id')
  // === is strict quality
  if (btnId === 'create') {
    $('#create-car').show()
    $('#read-car').hide()
    $('#update-car').hide()
    $('#delete-car').hide()
  }
  if (btnId === 'read') {
    $('#read-car').show()
    $('#update-car').hide()
    $('#delete-car').hide()
    $('#create-car').hide()
  }
  if (btnId === 'update') {
    $('#update-car').show()
    $('#create-car').hide()
    $('#delete-car').hide()
    $('#read-cars').hide()
  }
  if (btnId === 'delete') {
    $('#delete-car').show()
    $('#read-cars').hide()
    $('#create-car').hide()
    $('#update-car').hide()
  }
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  // onReadCar,
  onReadCars,
  onCreateCar,
  // onShowCars,
  onUpdateCar,
  onDeleteCar,
  showForm
}
