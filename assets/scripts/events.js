'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')
// const copyData = data => {
//   store.game = data.game
// }

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // takes this data and sends it to our server
  // using an HTTP request (POST)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  $('#goBack').hide()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const showFormFields = () => {

  $('.allForms').show();
}


// USER SHOW FORM FIELDS
const showFormCreate = () => {
  $('.allForms').show();
  $('.createRating').show()
  $('.showRating').hide()
  $('.deleteRating').hide()
  $('.editRating').hide()  
}

const showFormShow = (event) => {
  $('.allForms').show();
  $('.showRating').show()
  $('.createRating').hide()
  $('.deleteRating').hide()
  $('.editRating').hide()
  onShowRating(event)
}

const showFormDelete = () => {
  $('.allForms').show();
  $('.createRating').hide()
  $('.showRating').hide()
  $('.editRating').hide() 
  $('.deleteRating').show()
}

const showFormEdit = () => {
  $('.allForms').show();
  $('.createRating').hide()
  $('.showRating').hide()
  $('.deleteRating').hide()
  $('.editRating').show()
}

// SUBMIT USER FORM FIELDS

const onCreateRating = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // $(event.target).trigger('reset')
  api.createRating(data)
    .then(ui.createRatingSuccess)
    .catch(ui.createRatingFailure)
}

const onShowRating = event => {
  event.preventDefault()
  api.showRating()
    .then(ui.showRatingSuccess)
    .catch(ui.showRatingFailure)      
}

const onEditRating = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.editRating(data)
    .then(ui.editRatingSuccess)
    .catch(ui.editRatingFailure)
}

const onDeleteRating = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // $(event.target).trigger('reset')
  api.deleteRating(data.rating.id)
    .then(ui.deleteRatingSuccess)
    .catch(ui.deleteRatingFailure) 
}


// SHOW ADMIN FORM FIELDS

const showFormCreateAdmin = () => {
  $('.allForms').show();
  $('.editRestaurant').hide()
  $('.showRestaurant').hide()
  $('.deleteRestaurant').hide()    
  $('.createRestaurant').show()
}

const showFormShowAdmin = event => {
  $('.allForms').show();
  $('.editRestaurant').hide()
  $('.createRestaurant').hide()
  $('.deleteRestaurant').hide()  
  $('.showRestaurant').show()
  onShowRestaurant(event)
}

const showFormDeleteAdmin = () => {
  $('.allForms').show();
  $('.editRestaurant').hide()
  $('.showRestaurant').hide()
  $('.createRestaurant').hide()  
  $('.deleteRestaurant').show()
}

const showFormEditAdmin = () => {
  $('.allForms').show();
  $('.createRestaurant').hide()
  $('.showRestaurant').hide()
  $('.deleteRestaurant').hide()  
  $('.editRestaurant').show()
}

// SUBMIT ADMIN FORM FIELDS
const onCreateRestaurant = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // $(event.target).trigger('reset')
  api.createRestaurant(data)
    .then(ui.createRestaurantSuccess)
    .catch(ui.createRestaurantFailure)
}

const onShowRestaurant = event => {
  event.preventDefault()
  api.showRestaurant()
    .then(ui.showRestaurantSuccess)
    .catch(ui.showRestaurantFailure)      
}
 


const onEditRestaurant = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.editRestaurant(data)
    .then(ui.editRestaurantSuccess)
    .catch(ui.editRestaurantFailure)
} 


const onDeleteRestaurant = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // $(event.target).trigger('reset')
  api.deleteRestaurant(data.restaurant.id)
    .then(ui.deleteRestaurantSuccess)
    .catch(ui.deleteRestaurantFailure) 
}

const showFormAll = event => {
  event.preventDefault()
  api.showRestaurant()
    .then(ui.showRestaurantSuccess)
    .catch(ui.showRestaurantFailure)      
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  showFormFields,
  showFormEdit,
  showFormDelete,
  showFormShow,
  showFormCreate,
  showFormEditAdmin,
  showFormDeleteAdmin,
  showFormShowAdmin,
  showFormCreateAdmin,
  onCreateRestaurant,
  onShowRestaurant,
  onEditRestaurant,
  onDeleteRestaurant,
  onCreateRating,
  onShowRating,
  onEditRating,
  onDeleteRating,
  showFormAll
  
}
