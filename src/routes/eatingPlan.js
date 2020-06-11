const express = require('express')
const eatingPlan = require('../usecases/eatingPlan')
const router = express.Router()
// const auth = require('../middlewares/auth')

router.get('/', async (request, response) => {
  try {
    const alleatingPlan = await eatingPlan.getAll()
    response.json({
      success: true,
      message: 'all eatingPlan',
      data: {
        eatingPlan: alleatingPlan
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
    console.log(eatingPlan)
    const neweatingPlan = await eatingPlan.create(request.body)
    response.json({
      success: true,
      message: 'eatingPlan add',
      data: {
        eatingPlan: neweatingPlan
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
