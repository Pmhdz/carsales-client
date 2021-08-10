// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const carEvents = require('./car/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', carEvents.onSignUp)
  $('#sign-in').on('submit', carEvents.onSignIn)
  $('#sign-out').on('submit', carEvents.onSignOut)
  // $('#change-password').on('submit', carEvents.onSignIn)
  $('#change-password').on('submit', carEvents.onSignIn)
  $('#sign-out').on('click', carEvents.onSignOut)
  // $('#add-car').on('click', carEvents.onAddCar)
  $('#create-car').on('submit', carEvents.onCreateCar)
  // $('#show-cars').on('click', carEvents.onShowCars)
  $('#update-car').on('click', carEvents.onUpdateCar)
  //   $('#car-update').on('submit', carEvents.onCarUpdate)
  $('#delete-car').on('click', carEvents.onDeleteCar)
  // $('#delete-car').on('submit', carEvents.onDelete)

  $('#change-password').hide()
  // $('#create-car').hide()
  $('#read-car').hide()
  $('#update-car').hide()
  $('#delete-car').hide()
  $('#sign-out').hide()
})
