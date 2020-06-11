const express = require('express')
const ingredients = require('../usecases/ingredients')
const router = express.Router()
// const auth = require('../middlewares/auth')

router.get('/', async (request, response) => {
  try {
    const allIngredients = await ingredients.getAll()
    response.json({
      success: true,
      message: 'all ingredients',
      data: {
        ingredients: allIngredients
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
    const body = request.body
    const newIngredient = await ingredients.create(body)
    response.json({
      success: true,
      message: 'ingredient add',
      data: {
        ingredient: newIngredient
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
