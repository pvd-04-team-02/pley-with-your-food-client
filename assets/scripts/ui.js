'use strict'

const siteFunc = require('./site.js')

const signUpSuccess = data => {
  $('#authmessage').empty()
  $('#authmessage').text('Account Created!')
  $('#sign-up')[0].reset()
}

const signUpFailure = error => {
  $('#authmessage').empty()
  $('#authmessage').text('Error on sign up')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
  $('#sign-up')[0].reset()
}

const signInSuccess = data => {
  $('#authmessage').empty()
  $('#authmessage').text('Signed in')
  $('#function-message').removeClass()
  console.log('logged in')
  $('#sign-in')[0].reset()
  siteFunc.mainForms()
}

const signInFailure = error => {
  $('#authmessage').empty()
  $('#authmessage').text('Error on sign in')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
  console.log('unable to login')
  $('#sign-in')[0].reset()
}

const signOutSuccess = data => {
  $('#function-message').text('Signed out succesfully')
  $('#function-message').removeClass()
  $('#function-message').addClass('success')
  console.log('signOutSuccess ran. Data is:', data)
  $('#sign-out')[0].reset()
}
const signOutFailure = error => {
  $('#function-message').text('Error on sign out')
  $('#function-message').removeClass()
  $('#function-message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
  $('#sign-out')[0].empty()
}
const changePasswordSuccess = data => {
  $('#function-message').text('Password changed successfully')
  $('#function-message').removeClass()
  $('#function-message').addClass('success')
  console.log('changePasswordSuccess ran. Data is :', data)
  $('#change-password')[0].reset()
}
const changePasswordFailure = error => {
  $('#function-message').text('Error on password change')
  $('#function-message').removeClass()
  $('#function-message').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
  $('#change-password')[0].reset()
}
const createRestaurantSuccess = data => {
  $('#function-message').text('created restaurant successfully')
  $('#function-message').removeClass()
  $('#function-message').addClass('success')
  console.log('createRatingSuccess ran. Data is :', data)
  $('#sign-up')[0].reset()
}
const createRestaurantFailure = error => {
  $('#function-message').text('Unable to create restaurant')
  $('#function-message').removeClass()
  $('#function-message').addClass('failure')
  console.error('createFailure ran. Error is :', error)
  // $('#sign-up')[0].reset()
}
const createRatingSuccess = data => {
  $('#function-message').text('created rating successfully')
  $('#function-message').removeClass()
  $('#function-message').addClass('success')
  console.log('createRatingSuccess ran. Data is :', data)
  $('#sign-up')[0].reset()
}
const createRatingFailure = error => {
  $('#function-message').text('Unable to create rating')
  $('#function-message').removeClass()
  $('#function-message').addClass('failure')
  console.error('createFailure ran. Error is :', error)
  // $('#sign-up')[0].reset()
}
// const createReviewSuccess = data => {
//   $('#function-message').text('created review successfully')
//   $('#function-message').removeClass()
//   $('#function-message').addClass('success')
//   console.log('createReviewSuccess ran. Data is :', data)
//   $('#sign-up')[0].reset()
// }
// const createReviewFailure = error => {
//   $('#function-message').text('Error on sign up')
//   $('#function-message').removeClass()
//   $('#function-message').addClass('failure')
//   console.error('createFailure ran. Error is :', error) }

const showRatingSuccess = data => {
  $('#function-message').text('show rating successfully')
  $('#function-message').removeClass()
  $('#function-message').addClass('success')
  console.log('showRatingSuccess ran. Data is :', data)
  $('#sign-up')[0].reset()
}
const showRatingFailure = error => {
  $('#function-message').text('Unable to show rating')
  $('#function-message').removeClass()
  $('#function-message').addClass('failure')
  console.error('showRatingFailure ran. Error is :', error)
}
const deleteRatingSuccess = data => {
  $('#function-message').text('deleted rating successfully')
  $('#function-message').removeClass()
  $('#function-message').addClass('success')
  console.log('deleteRatingSuccess ran. Data is :', data)
  $('#sign-up')[0].reset()
}
const deleteRatingFailure = error => {
  $('#function-message').text('Unable to delete rating')
  $('#function-message').removeClass()
  $('#function-message').addClass('failure')
  console.error('deleteRatingFailure ran. Error is :', error)
}
const showRestaurantSuccess = data => {
  $('#function-message').text('show restaurant successfully')
  $('#function-message').removeClass()
  $('#function-message').addClass('success')
  console.log('showRestaurantSuccess ran. Data is :', data)
  $('#sign-up')[0].reset()
}
const showRestaurantFailure = error => {
  $('#function-message').text('Unable to show restaurant')
  $('#function-message').removeClass()
  $('#function-message').addClass('failure')
  console.error('showRestaurantFailure ran. Error is :', error)
}
const deleteRestaurantSuccess = data => {
  $('#function-message').text('deleted restaurant successfully')
  $('#function-message').removeClass()
  $('#function-message').addClass('success')
  console.log('deleteRestaurantSuccess ran. Data is :', data)
  $('#sign-up')[0].reset()
}
const editRestaurantSuccess = data => {
  $('#function-message').text('edit restaurant successfully')
  $('#function-message').removeClass()
  $('#function-message').addClass('success')
  console.log('editRestaurantSuccess ran. Data is :', data)
  $('#sign-up')[0].reset()
}
const editRestaurantFailure = error => {
  $('#function-message').text('Unable to edit restaurant')
  $('#function-message').removeClass()
  $('#function-message').addClass('failure')
  console.error('editRestaurantFailure ran. Error is :', error)
}

const editRatingSuccess = data => {
  $('#function-message').text('edit rating successfully')
  $('#function-message').removeClass()
  $('#function-message').addClass('success')
  console.log('editRating ran. Data is :', data)
  $('#sign-up')[0].reset()
}
const editRatingFailure = error => {
  $('#function-message').text('Unable to edit rating')
  $('#function-message').removeClass()
  $('#function-message').addClass('failure')
  console.error('editRating ran. Error is :', error)
}





module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createRestaurantSuccess,
  createRestaurantFailure,
  createRatingSuccess,
  createRatingFailure,
  showRatingSuccess,
  showRatingFailure,
  deleteRatingSuccess,
  deleteRatingFailure,
  showRestaurantSuccess,
  showRestaurantFailure,
  deleteRestaurantSuccess,
  editRestaurantSuccess,
  editRestaurantFailure,
  editRatingSuccess,
  editRatingFailure
}