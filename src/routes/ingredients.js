const express = require('express')
const ingredients = require('../usecases/ingredients')
const router = express.Router()
const auth = require('../middlewares/auth')

router.get('/:id', auth, (request, response, next) => {
  console.log('middleware en GET/ingredients')
  next()
}, async (request, response) => {
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

router.delete('/:id', auth, async (request, response) => {
  try {
    const { id } = request.params
    const ingredientDeleted = await ingredients.deleteById(id)
    response.json({
      succes: true,
      message: `ingredient with id ${id} deleted`,
      data: {
        ingredient: ingredientDeleted
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
    const ingredientUpdate = await ingredients.updateById(id, request.body)
    response.json({
      success: true,
      message: `ingredient with id ${id} updated`,
      data: {
        ingredient: ingredientUpdate
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
