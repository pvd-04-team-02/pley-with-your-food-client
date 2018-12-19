'use strict'

const siteFunc = require('./site.js')
const store = require('./store.js')

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
  $('#message').removeClass()
  $('#sign-in')[0].reset()
  store.user = data.user
  siteFunc.mainForms()
}

const signInFailure = error => {
  $('#authmessage').empty()
  $('#authmessage').text('Error on sign in')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
  $('#sign-in')[0].reset()
}

const signOutSuccess = data => {
  $('#message').text('Signed out succesfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess ran. Data is:', data)
  $('#sign-out')[0].reset()
  siteFunc.mainForms()
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
  // $('#change-password')[0].reset()
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
  $('#message').text('created restaurant successfully')
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
  createReviewSuccess,
  createReviewFailure
}
