const store = require('./store.js')
const config = require('./config.js')

//Auth events
const signUp = data => {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

// rating CRUD actions

const createRating = function (data) {
  return $.ajax({
    url: baseUrl + data.restaurant.id + '/ratings',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showRating = function () {
  return $.ajax({
    url: baseUrl + '/ratings',
    method: 'GET'
  })
}

const deleteRating = function (data) {
  return $.ajax({
    url: baseUrl + '/ratings/' + data.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token' + store.user.token
    }
  })
}

const editRating = function (data) {
  return $.ajax({
    url: baseUrl + '/rating/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    })
}

// restaurant CRUD actions

const createRestaurant = function (data) {
  return $.ajax({
    url: baseUrl + '/restaurants',
    // need to verify route is correct look at backend
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showRestaurant = function () {
  return $.ajax({
    url: baseUrl + '/restaurants',
    method: 'GET'
  })
}

const deleteRestaurant = function (data) {
  return $.ajax({
    url: baseUrl + '/restauruants/' + data.id,    
    method: 'DELETE',
    headers: {
      Authorization: 'Token token' + store.user.token
    }                    
  })
}

const editRestaurant = function (data) {
  return $.ajax({
    url: baseUrl + '/restaurant/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}    





// const createReview = function (data) {
//   return $.ajax({
//     url: baseUrl + data.restaurant.id + '/reviews',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
// })
// }



module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createRestaurant,
  createRating
}
