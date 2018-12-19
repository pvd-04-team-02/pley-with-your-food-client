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
const onCreateRating = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // $(event.target).trigger('reset')
  api.createRating(data)
    .then(ui.CreateSuccess)
    .catch(ui.CreateFailure)
}
const onCreateRestaurant = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // $(event.target).trigger('reset')
  api.createRestaurant(data)
    .then(ui.CreateSuccess)
    .catch(ui.CreateFailure)
}


const onIndex = event => {
  event.preventDefault()
  // const data = getFormFields(event.target)
  // $(event.target).trigger('reset')
  api.index()
    .then(ui.IndexSuccess)
    .catch(ui.IndexFailure)
}
const onDelete = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // $(event.target).trigger('reset')
  api.Delete(data.restaurant.id)
    .then(ui.DeleteSuccess)
    .catch(ui.DeleteFailure)
}
const onUpdate = event => {
  event.preventDefault()
  console.log('in onUpdate')
  const data = getFormFields(event.target)
  // $(event.target).trigger('reset')
  api.Update(data, data.restaurant.id)
    .then(ui.UpdateSuccess)
    .catch(ui.UpdateFailure)
}

const showFormFields = () => {

  $('.allForms').show();
}

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


module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreate,
  onIndex,
  onDelete,
  onUpdate,
  showFormFields,
  showFormEdit,
  showFormDelete,
  showFormShow,
  showFormCreate,
  showFormEditAdmin,
  showFormDeleteAdmin,
  showFormShowAdmin,
  showFormCreateAdmin

}
