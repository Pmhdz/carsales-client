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

const onCreateCarSuccess = (res) => {
  $('#create-car').trigger('reset')
  $('#message').text('Create car was successful')
  store.car = res.car
  console.log(res)
}
const onCreateCarFailure = () => {
  $('#message').text('Create car failure')
}

const onReadCarSuccess = (res) => {
  $('#read-car').trigger('reset')
  $('#message').text('Read car was successful')
  store.car = res.car
}
const onReadCarFailure = () => {
  $('#message').text('Read car failure')
}

const onUpdateCarSuccess = (res) => {
  $('#messaging').text('Your car has been')
  $('#update-car').trigger('reset')
}

const onUpdateCarFailure = () => {
  $('#message').text('Update car failure')
}

const onDeleteCarSuccess = (res) => {
  $('#message').text('Your car has been deleted')
  $('#delete-car').trigger('reset')
}
const onDeleteCarFailure = () => {
  $('#message').text('Delete Car failure')
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
