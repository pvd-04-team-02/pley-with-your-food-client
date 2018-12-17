'use strict'

$('#signInResults ').hide()
const signUpSuccess = data => {
  $('#message').text('Signed up succesfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is:', data)
  $('#sign-out')[0].reset()
}

const signUpFailure = error => {
  $('#message').text('Error on Sign Up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signUpFailure ran. Error is:', error)
  $('#sign-out')[0].reset()
}
const logInSuccess = data => {
  $('#message').text('Log in succesfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#results2').show()
  console.log('logInSuccess ran. Data is:', data)
  $('#log-in')[0].reset()
}
const signOutSuccess = data => {
  $('#message').text('Signed out succesfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess ran. Data is:', data)
  $('#sign-out')[0].reset()
}
const signOutFailure = error => {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
  $('#sign-out')[0].empty()
}
const changePasswordSuccess = data => {
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changePasswordSuccess ran. Data is :', data)
  $('#change-password')[0].reset()
}
const changePasswordFailure = error => {
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
  $('#change-password')[0].reset()
}
const createRestaurantSuccess = data => {
  $('#message').text('created restaurant successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('createRatingSuccess ran. Data is :', data)
  $('#create-restaurant')[0].reset()
}
const createRestaurantFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('createFailure ran. Error is :', error)
  // $('#sign-up')[0].reset()
}
const createRatingSuccess = data => {
  $('#message').text('created rating successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('createRatingSuccess ran. Data is :', data)
  $('#create-Rating')[0].reset()
}
const createRatingFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('createFailure ran. Error is :', error)
  // $('#sign-up')[0].reset()
}
// const createReviewSuccess = data => {
//   $('#message').text('created restaurant successfully')
//   $('#message').removeClass()
//   $('#message').addClass('success')
//   console.log('createReviewSuccess ran. Data is :', data)
//   $('#createR-ating')[0].reset()
// }
// const createReviewFailure = error => {
//   $('#message').text('Error on sign up')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   console.error('createFailure ran. Error is :', error)
// }


module.exports = {
  signUpSuccess,
  signUpFailure,
  logInSuccess,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createRestaurantSuccess,
  createRestaurantFailure,
  createRatingSuccess,
  createRatingFailure
}
