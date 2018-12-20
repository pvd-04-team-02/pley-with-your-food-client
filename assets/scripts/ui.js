'use strict'

const siteFunc = require('./site.js')
const store = require('./store.js')
const toastr = require('toastr')

// Auth UI //

// Sign up //
const signUpSuccess = data => {
  toastr.success('Success', 'Account created')
  $('#sign-up')[0].reset()
}

const signUpFailure = error => {
  toastr.error('Failure', 'Account creation failed')
  $('#sign-up')[0].reset()
}
// End Sign up //

// Sign in //
const signInSuccess = data => {
  toastr.success('Success', 'Signed in')
  $('#sign-in')[0].reset()
  store.user = data.user
  console.log(store.user)
  siteFunc.mainForms()
  siteFunc.signedIn()
  $('.site__content').hide()
  if (store.user.owner === true) {
    $('#adminActions').show()
  } else {
    $('#userActions').show()
  }
}

const signInFailure = error => {
  toastr.error('Failure', 'Sign in failed')
  $('#sign-in')[0].reset()
}
// End Sign in//

// Sign out //
const signOutSuccess = data => {
  $('#sign-out')[0].reset()
  $('.allForms').hide()
  $('#userActions').hide()
  $('#adminActions').hide()
  siteFunc.mainForms()
  siteFunc.signedOut()
  toastr.success('Success', 'Signed out')
  $('.site__content').show()
}

const signOutFailure = error => {
  toastr.error('Failure', 'Sign out failed')
  $('#sign-out')[0].reset()
}
// End Sign out //

// Change pass //
const changePasswordSuccess = data => {
  toastr.success('Success', 'Password changed')
  $('#change-password')[0].reset()
}

const changePasswordFailure = error => {
  toastr.error('Failure', 'Password change failed')
  $('#change-password')[0].reset()
}
// End Change pass//

// End Auth UI //

// Restaurant UI //

// Create //
const createRestaurantSuccess = data => {
  toastr.success('Success', 'Restaurant added')
  $('#createRestaurant')[0].reset()
}

const createRestaurantFailure = error => {
  toastr.error('Failure', 'Restaurant create failed')
  $('#createRestaurant')[0].reset()
}
// End Create //

// Edit //
const editRestaurantSuccess = data => {
  toastr.success('Success', 'Restaurant editted')
  $('#editRestaurant')[0].reset()
}

const editRestaurantFailure = error => {
  toastr.error('Failure', 'Restaurant edit failed')
  $('#editRestaurant')[0].reset()
}
// End Edit //

// Delete //
const deleteRestaurantSuccess = data => {
  toastr.success('Success', 'Restaurant deleted')
  $('#deleteRestaurant')[0].reset()
}

const deleteRestaurantFailure = data => {
  toastr.error('Failure', 'Restaurant delete fail')
  $('#deleteRestaurant')[0].reset()
}
// End Delete //

// Show //
const showRestaurantSuccess = data => {
  toastr.success('Success', 'Restaurant shown')
  console.log(data.restaurants)
  console.log(data.restaurants[0]._id)
  data.restaurants.forEach(restaurant => {
    $('.showRestaurant').append(`
      <div class=${restaurant._id}>
      <h4 id=${restaurant._id}>${restaurant._id}</h4>
      </div>`)
    $(`#${restaurant._id}`).css('color', '#01499E')
    for (const key in restaurant) {
      if (key !== '_id' && key !== '__v' && key !== 'createdAt' && key !== 'updatedAt') {
        $(`.${restaurant._id}`).append(`<h6>${key}: ${restaurant[key]}</h6>`)
        // $(`.${restaurant._id}`).css('border', '3px solid #434a52')
        // $(`.${restaurant._id}`).css('background', 'rgba(159, 162, 165, 0.8)')
        // $(`.${restaurant._id}`).css('box-shadow', '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)')
        // $(`.${restaurant._id}`).css('margin', '4px')
      }
    }
  })
}


const showRestaurantFailure = error => {
  toastr.error('Failure', 'Restaurant show failed')
  $('#showRestaurant')[0].reset()
}
// End Show //

// End Restaurant UI //

// Rating UI //

// Create //
const createRatingSuccess = data => {
  toastr.success('Success', 'Rating created')
  $('#createRating')[0].reset()
}

const createRatingFailure = error => {
  toastr.error('Failure', 'Rating create failed')
  $('#createRating')[0].reset()
}
// End Create //

// Delete //
const deleteRatingSuccess = data => {
  toastr.success('Success', 'Rating deleted')
  $('#deleteRating')[0].reset()
}

const deleteRatingFailure = error => {
  toastr.error('Failure', 'Rating delete failed')
  $('#deleteRating')[0].reset()
}
// End Delete //

// Edit //
const editRatingSuccess = data => {
  toastr.success('Success', 'Rating editted')
  $('#editRating')[0].reset()
}

const editRatingFailure = error => {
  toastr.error('Failure', 'Rating edit failed')
  $('#editRating')[0].reset()
}
// End Edit //

// Show //
const showRatingSuccess = data => {
  toastr.success('Success', 'Ratings shown')
  console.log(data.ratings)
  data.ratings.forEach(rating => {
    $('.showRating').append(`
     <div class=${rating._id}>
     <h4 id=${rating._id}>${rating._id}</h4>
     </div>`)
     $(`#${rating._id}`).css('color', '#01499E')
     for (const key in rating) {
       if (key !== '_id' && key !== '__v' && key!=='createdAt' && key !== 'updatedAt') {
          $(`.${rating._id}`).append(`<h6>${key}: ${rating[key]}, </h6>`)
          // if rating.restaurant === datav2.restaurant.id
          // print out restauarant and ratings for it
          $(`.${rating._id}`).css('border', '3px solid #434a52')
          $(`.${rating._id}`).css('background', 'rgba(159, 162, 165, 0.8)')
          $(`.${rating._id}`).css('box-shadow', '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)')
          $(`.${rating._id}`).css('margin', '4px')         
      }
    }
  })
}

const showRatingFailure = error => {
  toastr.error('Failure', 'Rating show failed')
  $('#showRating')[0].reset()
}

// End Show //

// End Rating UI //

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
  deleteRestaurantFailure,
  editRestaurantSuccess,
  editRestaurantFailure,
  editRatingSuccess,
  editRatingFailure
}