const express = require('express')
const diets = require('../usecases/diets')
const router = express.Router()
// const auth = require('../middlewares/auth')

router.get('/', async (request, response) => {
  try {
    const alldiets = await diets.getAll()
    response.json({
      success: true,
      message: 'all Diets',
      data: {
        diets: alldiets
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

router.post('/manyDiets', async (request, response) => {
  try {
    const body = request.body
    const newDiets = await diets.insertDiets(body)
    response.json({
      succes: true,
      message: 'many diets',
      data: {
        diets: newDiets
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
  console.log('diets')
  try {
    const newDiets = await diets.create(request.body)
    response.json({
      success: true,
      message: 'Diets add',
      data: {
        diets: newDiets
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
