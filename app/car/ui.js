const store = require('./store')

const onSignUpSuccess = (response) => {
  $('#message').text(
    'Thank you for signing up! car Finder is glad to welcome you to the  sneaker community'
  )
  console.log(response)
  $('#sign-up').trigger('reset')
  $('#sign-out').hide()
}
const onSignUpFailure = () => {
  $('#message').text('Sign up failure')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = (response) => {
  $('#message').text(
    `Thank you for signing in to car Finder! ${response.user.email}`
  )
  store.user = response.user
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
}
const onSignInFailure = () => {
  $('#message').text('Sign in failure')
  $('#sign-in').trigger('reset')
}
const onSignOutSuccess = () => {
  $('#message').text('Thank you for signing out, see you soon!')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
}
const onSignOutFailure = () => {
  $('#message').text('car Finder Sign out failure')
}
const onChangePasswordSuccess = () => {
  $('#change-password').trigger('reset')
  $('#message').text('You have now changed your password, please remember it!')
}
const onChangePasswordFailure = () => {
  $('#message').text('Password Change failure')
}

const onCreateCarSuccess = function (res) {
  $('#create-car').trigger('reset')
  $('#messaging').text('Your car has been created!')
  store.car = res.car
  console.log(res)
}

const onCreateCarFailure = function () {
  $('#messaging').text('Create car failure.')
}

const onReadCarSuccess = (res) => {
  $('#read-car').trigger('reset')
  $('#message').text('Read car was successful')
  store.shoe = res.car
}

const onReadCarFailure = function () {
  $('#messaging').text('Reading car has failed')
}

const onUpdateCarSuccess = function (res) {
  $('#messaging').text('Your car has been updated')
  $('#update-car').trigger('reset')
  console.log(res)
}

const onUpdateCarFailure = function () {
  $('#messaging').text('Update car failure')
}

const onDeleteCarSuccess = function (res) {
  $('#messaging').text('Please enter Car ID')
  $('#delete-car').trigger('reset')
  console.log(res)
}

const onDeleteCarFailure = function () {
  $('#messaging').text('Delete car error')
  $('#car-delete').trigger('reset')
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
  onReadCarSuccess,
  onReadCarFailure,
  onUpdateCarSuccess,
  onUpdateCarFailure,
  onDeleteCarSuccess,
  onDeleteCarFailure
}
