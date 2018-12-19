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
  console.log('in onChangePassword')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // takes this data and sends it to our server
  // using an HTTP request (POST)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// const onIndex = event => {
//   event.preventDefault()
//   // const data = getFormFields(event.target)
//   // $(event.target).trigger('reset')
//   api.index()
//     .then(ui.IndexSuccess)
//     .catch(ui.IndexFailure)
// }
// const onDelete = event => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   // $(event.target).trigger('reset')
//   api.Delete(data.restaurant.id)
//     .then(ui.DeleteSuccess)
//     .catch(ui.DeleteFailure)
// }
// const onUpdate = event => {
//   event.preventDefault()
//   console.log('in onUpdate')
//   const data = getFormFields(event.target)
//   // $(event.target).trigger('reset')
//   api.Update(data, data.restaurant.id)
//     .then(ui.UpdateSuccess)
//     .catch(ui.UpdateFailure)
// }

const showFormFields = () => {

  $('.allForms').show();
}


// USER SHOW FORM FIELDS
const showFormCreate = () => {
  console.log('in show formcreate')
  console.log('hide all these normal user functions')
  $('.createRating').show()
  $('.showRating').hide()
  $('.deleteRating').hide()
  $('.editRating').hide()  
}

const showFormShow = () => {
  console.log('in show formshow')
  $('.showRating').show()
  $('.createRating').hide()
  $('.deleteRating').hide()
  $('.editRating').hide()  
}

const showFormDelete = () => {
  $('.createRating').hide()
  $('.showRating').hide()
  $('.editRating').hide() 
  $('.deleteRating').show()
}

const showFormEdit = () => {
  $('.createRating').hide()
  $('.showRating').hide()
  $('.deleteRating').hide()
  $('.editRating').show()
}

// SUBMIT USER FORM FIELDS

const onCreateRating = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // $(event.target).trigger('reset')
  api.createRating(data)
    .then(ui.CreateSuccess)
    .catch(ui.CreateFailure)
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
    .then(ui.UpdateSuccess)
    .catch(ui.UpdateFailure)
}

const onDeleteRating = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // $(event.target).trigger('reset')
  api.onDeleteRating(data.rating.id)
    .then(ui.DeleteSuccess)
    .catch(ui.DeleteFailure) 
}


// SHOW ADMIN FORM FIELDS

const showFormCreateAdmin = () => {
  console.log('in show formcreate')
  console.log('hide all other admin functions (3)')
  $('.editRestaurant').hide()
  $('.showRestaurant').hide()
  $('.deleteRestaurant').hide()    
  $('.createRestaurant').show()
}

const showFormShowAdmin = () => {
  console.log('in show formshow')
  $('.editRestaurant').hide()
  $('.createRestaurant').hide()
  $('.deleteRestaurant').hide()  
  $('.showRestaurant').show()
}

const showFormDeleteAdmin = () => {
  $('.editRestaurant').hide()
  $('.showRestaurant').hide()
  $('.createRestaurant').hide()  
  $('.deleteRestaurant').show()
}

const showFormEditAdmin = () => {
  $('.createRestaurant').hide()
  $('.showRestaurant').hide()
  $('.deleteRestaurant').hide()  
  $('.editRestaurant').show()
}

// SUBMIT ADMIN FORM FIELDS
const onCreateRestaurant = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // $(event.target).trigger('reset')
  api.createRestaurant(data)
    .then(ui.CreateSuccess)
    .catch(ui.CreateFailure)
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
  api.EditRestaurant(data)
    .then(ui.UpdateSuccess)
    .catch(ui.UpdateFailure)
} 


const onDeleteRestaurant = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // $(event.target).trigger('reset')
  api.Delete(data.restaurant.id)
    .then(ui.deleteRestaurantSuccess)
    .catch(ui.deleteRestaurantFailure) 
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
  onDeleteRating
  
}
