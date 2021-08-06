// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const carEvents = require('./car/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', carEvents.onSignUp)
  $('#sign-in').on('submit', carEvents.onSignIn)
  $('#sign-out').on('submit', carEvents.onSignOut)
  // $('#change-password').on('submit', carEvents.onSignIn)
})
