const express = require('express')
const dishes = require('../usecases/dishes')
const router = express.Router()
const auth = require('../middlewares/auth')

router.get('/:id', auth, (request, response, next) => {
  console.log('middleware en GET/dishes')
  next()
}, async (request, response) => {
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

router.delete('/:id', auth, async (request, response) => {
  try {
    const { id } = request.params
    const dishesDeleted = await dishes.deleteById(id)
    response.json({
      succes: true,
      message: `dishes with id ${id} deleted`,
      data: {
        dishes: dishesDeleted
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

router.patch('/:id', auth, async (request, response) => {
  try {
    const { id } = request.params
    const dishesUpdate = await dishes.updateById(id, request.body)
    response.json({
      success: true,
      message: `dishes with id ${id} updated`,
      data: {
        dishes: dishesUpdate
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
