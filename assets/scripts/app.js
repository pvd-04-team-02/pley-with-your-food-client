'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')
const siteFunc = require('./site.js')

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.changePassword)
  $('#sign-out').on('submit', events.onSignOut)
  $('#Add').on('submit', events.onCreate)
  $('.Edit').on('submit', events.onUpdate)
  $('.Delete').on('submit', events.onDelete)
  $('.Index').on('submit', events.onIndex)
  $('#accButton').on('click', siteFunc.authForms)
  $(document).ready(siteFunc.mainForms)
  $('.message a').click(function () {
    $('form').animate({height: 'toggle', opacity: 'toggle'}, 'slow')
  })
})
