// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const carEvents = require('./car/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  // your JS code goes here
  // Before Sign Up
  $('#sign-up').on('submit', carEvents.onSignUp)
  $('#sign-in').on('submit', carEvents.onSignIn)
  // $('#sign-out').on('submit', carEvents.onSignOut)
  // $('#change-password').on('submit', carEvents.onSignIn)
  $('#change-password').on('submit', carEvents.onChangePassword)
  $('.btn').on('click', carEvents.showForm)
  $('#sign-out').on('click', carEvents.onSignOut)

  // After Sign Up
  // $('#add-car').on('click', carEvents.onAddCar)
  $('#create-car').on('submit', carEvents.onCreateCar)
  //  $('#show-cars').on('click', carEvents.onShowCars)
  $('#read-car').on('click', carEvents.onReadCars)
  $('#update-car').on('submit', carEvents.onUpdateCar)
  // $('#car-update').on('submit', carEvents.onCarUpdate)

  $('#delete-car').on('submit', carEvents.onDeleteCar)
  // $('#delete-car').on('submit', carEvents.onDelete)

  // Hide
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#create-car').hide()
  $('#read-car').hide()
  $('#update-car').hide()
  $('#delete-car').hide()
  $('.btn').hide()
})
