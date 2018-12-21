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
  $('#show-allRest').on('click', events.showFormShowAdmin)
  $('#create-restaurant').on('click', events.showFormCreateAdmin)
  $('#show-restaurant').on('click', events.showFormShowAdmin)
  $('#delete-restaurant').on('click', events.showFormDeleteAdmin)
  $('#edit-restaurant').on('click', events.showFormEditAdmin)

  // getting form fields to submit
  $('#createRestaurant').on('submit', events.onCreateRestaurant)
  $('#editRestaurant').on('submit', events.onEditRestaurant)
  $('#deleteRestaurant').on('submit', events.onDeleteRestaurant)
  $('#createRating').on('submit', events.onCreateRating)
  $('#editRating').on('submit', events.onEditRating)
  $('#deleteRating').on('submit', events.onDeleteRating)

  // submit
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#changePassword').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  $('#accButton').on('click', siteFunc.authForms)
  $('#showSettings').on('click', siteFunc.settingShow)
  $('#goBack').on('click', siteFunc.goBack)
  $(document).ready(siteFunc.mainForms)
  $('.message a').click(function () {
    $('form').animate({height: 'toggle', opacity: 'toggle'}, 'slow')
  })
})
