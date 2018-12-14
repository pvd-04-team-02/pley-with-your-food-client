'use strict'

$('#signInResults ').hide()
const signUpSuccess = data => {
  $('#message').text('Signed up succesfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is:', data)
}

const signUpFailure = error => {
  $('#message').text('Error on Sign Up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signUpFailure ran. Error is:', error)
}
const logInSuccess = data => {
  $('#message').text('Log in succesfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#results2').show()
  console.log('logInSuccess ran. Data is:', data)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  logInSuccess
}
