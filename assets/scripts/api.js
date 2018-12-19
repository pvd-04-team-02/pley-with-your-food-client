const store = require('./store.js')
const config = require('./config.js')

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
    data: data
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
