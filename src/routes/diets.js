const express = require('express')
const diets = require('../usecases/diets')
const router = express.Router()
const auth = require('../middlewares/auth')

router.get('/:id', auth, (request, response, next) => {
  console.log('middleware en GET/diets')
  next()
}, async (request, response) => {
  try {
    const allDiets = await diets.getAll()
    response.json({
      success: true,
      message: 'all diets',
      data: {
        diets: allDiets
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
    const newdiets = await diets.create(request.body)
    response.json({
      success: true,
      message: 'diets add',
      data: {
        diets: newdiets
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
    const dietsDeleted = await diets.deleteById(id)
    response.json({
      succes: true,
      message: `diets with id ${id} deleted`,
      data: {
        diets: dietsDeleted
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
    const dietsUpdate = await diets.updateById(id, request.body)
    response.json({
      success: true,
      message: `diets with id ${id} updated`,
      data: {
        diets: dietsUpdate
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
