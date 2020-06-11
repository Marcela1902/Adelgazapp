const express = require('express')
const direction = require('../usecases/direction')
const router = express.Router()
// const auth = require('../middlewares/auth')

router.get('/', async (request, response) => {
  try {
    const allDirection = await direction.getAll()
    response.json({
      success: true,
      message: 'all directions',
      data: {
        dishes: allDirection
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

router.post('/', async (request, response) => {
  try {
    const newDirection = await direction.create(request.body)
    response.json({
      success: true,
      message: 'direction add',
      data: {
        dishes: newDirection
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
