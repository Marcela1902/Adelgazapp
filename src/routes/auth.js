const express = require('express')

const users = require('../usecases/users')

const router = express.Router()

router.post('/login', async (request, response) => {
  try {
    console.log('login')
    const { email, password } = request.body
    const token = await users.login(email, password)

    response.json({
      success: true,
      message: 'loged in',
      data: {
        ...token
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

module.exports = router
