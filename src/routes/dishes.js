const express = require('express')
const dishes = require('../usecases/dishes')
const router = express.Router()
// const auth = require('../middlewares/auth')

router.get('/', async (request, response) => {
  try {
    const alldishes = await dishes.getAll()
    response.json({
      success: true,
      message: 'all dishes',
      data: {
        dishes: alldishes
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
    const newdishes = await dishes.create(request.body)
    response.json({
      success: true,
      message: 'dishes add',
      data: {
        dishes: newdishes
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
