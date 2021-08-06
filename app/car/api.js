'use strict'
const config = require('./../config')
const store = require('.././store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/stories',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  signUp
}
