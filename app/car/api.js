'use strict'
const store = require('./store')
const config = require('../config')

// Sign Up
const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

// Sign In
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

// Sign Out
const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

// Change Password
const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    data,
    url: config.apiUrl + '/change-password',
    headers: { Authorization: `Bearer ${store.user.token}` }
  })
}

// Create Car
const createCar = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/cars',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

// Show Car

const readCar = function () {
  return $.ajax({
    url: config.apiUrl + '/cars',
    method: 'GET'
  })
}

const readCars = function (data) {
  return $.ajax({
    method: 'GET',
    data,
    url: config.apiUrl + '/cars',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

// Update Car
const updateCar = function (data, id) {
  return $.ajax({
    method: 'PATCH',
    data,
    url: config.apiUrl + '/cars/' + id,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

// Delete Car
const deleteCar = function (id) {
  console.log(id)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/cars/' + id,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createCar,
  readCar,
  readCars,
  // showCars,
  updateCar,
  deleteCar
}
