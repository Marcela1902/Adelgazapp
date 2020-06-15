const express = require('express')
const eatingPlan = require('../usecases/eatingPlan')
const router = express.Router()
// const auth = require('../middlewares/auth')

router.get('/', async (request, response) => {
  try {
    var eatingPlans
    const { objective } = request.params
    if (objective) {
      eatingPlans = await eatingPlan.filterByObjective(objective)
    } else {
      eatingPlans = await eatingPlan.getAll()
    }
    response.json({
      success: true,
      message: 'all eatingPlan',
      data: {
        eatingPlan: eatingPlans
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

router.post('/manyEatingPlan', async (request, response) => {
  try {
    const body = request.body
    const newEatingPlan = await eatingPlan.insertEatingPlan(body)
    response.json({
      succes: true,
      message: 'many eatingPlan',
      data: {
        eatingPlan: newEatingPlan
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
