'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')
const siteFunc = require('./site.js')

$(() => {

  // getting form fields to show
  // $('.page-header-image').on('click', events.showFormFields)
  $('#create-rating').on('click', events.showFormCreate)
  $('#show-rating').on('click', events.showFormShow)
  $('#delete-rating').on('click', events.showFormDelete)
  $('#edit-rating').on('click', events.showFormEdit)
  $('#create-restaurant').on('click', events.showFormCreateAdmin)
  $('#show-restaurant').on('click', events.showFormShowAdmin)
  $('#delete-restaurant').on('click', events.showFormDeleteAdmin)
  $('#edit-restaurant').on('click', events.showFormEditAdmin)

  // getting form fields to submit
  $('submit-create-restaurant').on('submit', events.onCreateRestaurant)
  $('submit-edit-restaurant').on('submit', events.onEditRestaurant)
  $('submit-delete-restaurant').on('submit', events.onDeleteRestaurant)
  $('submit-create-rating').on('submit', events.onCreateRating)
  $('submit-edit-rating').on('submit', events.onEditRating)
  $('submit-delete-rating').on('submit', events.onDeleteRating)

  // submit
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#changePassword').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  $('#Add').on('submit', events.onCreate)
  $('.page-header-image').on('submit', events.onUpdate)
  $('.Delete').on('submit', events.onDelete)
  $('.Index').on('submit', events.onIndex)
  $('#accButton').on('click', siteFunc.authForms)
  $('#accButton').on('click', siteFunc.settingsForms)
  $('#showSettings').on('click', siteFunc.settingShow)
  $(document).ready(siteFunc.mainForms)
  $('.message a').click(function () {
    $('form').animate({height: 'toggle', opacity: 'toggle'}, 'slow')
  })
})
