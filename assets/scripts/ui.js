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
  $('#sign-out')[0].reset()
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
  $('#sign-up')[0].reset()
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
  $('#sign-up')[0].reset()
}
const createRatingFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('createFailure ran. Error is :', error)
  // $('#sign-up')[0].reset()
}
const createReviewSuccess = data => {
  $('#message').text('created review successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('createReviewSuccess ran. Data is :', data)
  $('#sign-up')[0].reset()
}
const createReviewFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('createFailure ran. Error is :', error)
}
const showRatingSuccess = data => {
  $('#message').text('show rating successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('showRatingSuccess ran. Data is :', data)
  $('#sign-up')[0].reset()
}
const showRatingFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('showRatingFailure ran. Error is :', error)
}
const deleteRatingSuccess = data => {
  $('#message').text('deleted rating successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('deleteRatingSuccess ran. Data is :', data)
  $('#sign-up')[0].reset()
}
const deleteRatingFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('deleteRatingFailure ran. Error is :', error)
}
const showRestaurantSuccess = data => {
  $('#message').text('show restaurant successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('showRestaurantSuccess ran. Data is :', data)
  $('#sign-up')[0].reset()
}
const showRestaurantFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('showRestaurantFailure ran. Error is :', error)
}
const deletestaurantSuccess = data => {
  $('#message').text('deleted restaurant successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('deleteRestaurantSuccess ran. Data is :', data)
  $('#sign-up')[0].reset()
}
const editRestaurantSuccess = data => {
  $('#message').text('edit restaurant successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('editRestaurantSuccess ran. Data is :', data)
  $('#sign-up')[0].reset()
}
const editRestaurantFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('editRestaurantFailure ran. Error is :', error)
}





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
  createRatingFailure,
  createReviewSuccess,
  createReviewFailure,
  showRatingSuccess,
  showRatingFailure,
  deleteRatingSuccess,
  deleteRatingFailure,
  showRestaurantSuccess,
  showRestaurantFailure,
  deletestaurantSuccess,
  editRestaurantSuccess,
  editRestaurantFailure
}
