const express = require('express')
const shoppingCart = require('../usecases/shoppingCart')
const router = express.Router()
// const auth = require('../middlewares/auth')

router.get('/', async (request, response) => {
  try {
    const shopping = await shoppingCart.getAll()
    response.json({
      success: true,
      message: 'all shoppingCart',
      data: {
        shoppingCart: shopping
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

router.get('/getTotalPriceBuy/:idEatingPlan', async (request, response) => {
  try {
    const { idEatingPlan } = request.params
    const totalPrice = await shoppingCart.getTotalPriceBuy(idEatingPlan)
    response.json({
      success: true,
      message: 'eating plans',
      data: {
        ...totalPrice
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
    console.log(shoppingCart)
    const newshoppingCart = await shoppingCart.create(request.body)
    response.json({
      success: true,
      message: 'shopping add',
      data: {
        shoppingCart: newshoppingCart
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
