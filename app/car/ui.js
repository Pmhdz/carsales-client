'use strict'
const store = require('./store')

const onSignUpSuccess = (response) => {
  $('#message').text('Thank you for Signing up!')
  console.log(response)
  $('#sign-up').trigger('reset')
  $('#sign-out').hide()
  $('#change-password').hide()
  // $('#change-password').show()
  // $('.btn').show()
  // $('#find').show()
}
const onSignUpFailure = () => {
  $('#message').text('Sign up failure')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = (response) => {
  $('#message').text(`Thank you for signing in! ${response.user.email}`)
  store.user = response.user
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#read-cars').show()
  $('#find').show()
  $('.btn').show()
}
const onSignInFailure = () => {
  $('#message').text('Sign in failure')
  $('#sign-in').trigger('reset')
}
const onSignOutSuccess = () => {
  $('#message').text('You have sign out!')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('#create-car').hide()
  $('#read-cars').hide()
  $('#update-car').hide()
  $('#delete-car').hide()
  $('.btn').hide()
  $('#find').hide()
  $('#car_list').hide()
  $('#change-password').hide()
}
const onSignOutFailure = () => {
  $('#message').text('Sign out failure')
}
const onChangePasswordSuccess = () => {
  $('#message').text('Password has been changed!')
  $('#change-password').trigger('reset')
}
const onChangePasswordFailure = () => {
  $('#message').text('Password change failure')
}

const onCreateCarSuccess = function (res) {
  $('#create').trigger('reset')
  $('#message').text('Your car has been created!')
  // store.car = res.car
  // console.log(res)
}

const onCreateCarFailure = function () {
  $('#message').text('Create car failure.')
}

const onReadCarsSuccess = (response) => {
  const cars = response.cars
  $('#message').text('Showing the cars has been success!')
  // look through shoes to look at each index
  const carsHtml = cars.map((car) => {
    // we need an HTML String to show ours cars that are available.
    // listing
    const htmlString = `
      <li>
      id: ${car._id}
      brand: ${car.brand}
      model: ${car.model}
      price: ${car.price}
      </li>
    `
    return htmlString
  })
  // dom tree
  $('#car_list').html(carsHtml)
  $('#delete-car').show()
  $('#update-car').show()
  $('#car_list').show()
}
const onReadCarsFailure = function () {
  $('#message').text('Reading car has failed')
}

const onUpdateCarSuccess = function (res) {
  $('#message').text('Your car has been updated!')
  $('#update-car').trigger('reset')
  // console.log(res)
}

const onUpdateCarFailure = function () {
  $('#message').text('Update car failure')
}

const onDeleteCarSuccess = function (res) {
  $('#message').text('Car is deleted!')
  $('#delete-car').trigger('reset')
  // console.log(res)
}

const onDeleteCarFailure = function () {
  $('#message').text('Delete car error')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onCreateCarSuccess,
  onCreateCarFailure,
  onReadCarsSuccess,
  onReadCarsFailure,
  onUpdateCarSuccess,
  onUpdateCarFailure,
  onDeleteCarSuccess,
  onDeleteCarFailure
}
