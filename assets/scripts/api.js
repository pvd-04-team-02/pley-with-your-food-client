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

const logIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

module.exports = {
  signUp,
  logIn
}
