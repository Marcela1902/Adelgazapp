const express = require('express')
const ingredients = require('../usecases/ingredients')
const router = express.Router()
const auth = require('../middlewares/auth')

router.get('/:id', auth, (request, response) => {
  console.log('middleware en GET/ingredients')
}, async (request, response) => {
  try {
    const { id } = request.params
    const ingredientsGet = await ingredients.findById(id)
    response.json({
      success: true,
      message: `ingredient with id ${id} get`,
      data: {
        ingredient: ingredientsGet
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
    const newIngredient = await ingredients.create(request.body)
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
