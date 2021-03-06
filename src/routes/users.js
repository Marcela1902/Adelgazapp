const express = require('express')
const users = require('../usecases/users')
const router = express.Router()
const auth = require('../middlewares/auth')

router.get('/', auth, (request, response, next) => {
  console.log('middleware en Get/users')
  next()
}, async (request, response) => {
  try {
    const allUsers = await users.getAll()
    response.json({
      message: 'all users',
      data: {
        users: allUsers
      }
    })
  } catch (error) {
    response.json({
      succes: false,
      error: error.message
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const newUser = await users.create(request.body)
    response.json({
      success: true,
      message: 'user created',
      data: {
        user: newUser
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.post('/signup', async (request, response) => {
  try {
    const newUser = await users.signup(request.body)
    response.json({
      success: true,
      message: 'user registered',
      data: {
        user: newUser
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
