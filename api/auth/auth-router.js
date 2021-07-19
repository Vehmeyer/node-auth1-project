const express = require('express')
const router = express.Router()
const User = require('../users/users-model')
const bcrypt = require('bcryptjs')
const md = require('./auth-middleware')
const { route } = require('../users/users-router')

// Require `checkUsernameFree`, `checkUsernameExists` and `checkPasswordLength`
// middleware functions from `auth-middleware.js`. You will need them here!


/**
  1 [POST] /api/auth/register { "username": "sue", "password": "1234" }

  response:
  status 200
  {
    "user_id": 2,
    "username": "sue"
  }

  response on username taken:
  status 422
  {
    "message": "Username taken"
  }

  response on password three chars or less:
  status 422
  {
    "message": "Password must be longer than 3 chars"
  }
 */

router.post('/register', md.checkPasswordLength, md.checkUsernameFree, (req, res, next) => {
  console.log("POST register connected")
})

/**
  2 [POST] /api/auth/login { "username": "sue", "password": "1234" }

  response:
  status 200
  {
    "message": "Welcome sue!"
  }

  response on invalid credentials:
  status 401
  {
    "message": "Invalid credentials"
  }
 */
  router.post('/login', md.checkUsernameExists, (req, res, next) => {
    console.log("POST login connected")
  })
  

/**
  3 [GET] /api/auth/logout

  response for logged-in users:
  status 200
  {
    "message": "logged out"
  }

  response for not-logged-in users:
  status 200
  {
    "message": "no session"
  }
 */
router.get('/logout', (req, res, next) => {
  console.log("GET auth connected")
})
 
// Don't forget to add the router to the `exports` object so it can be required in other modules
module.exports = router; 