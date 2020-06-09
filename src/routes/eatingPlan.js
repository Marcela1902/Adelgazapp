const express = require('express')
const eatingPlan = require('../usecases/eatingPlan')
const router = express.Router()
const auth = require('../middlewares/auth')

router.get('/:id', auth, (request, response, next) => {
  
  next()
}, async (request, response) => {
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

/*router.post('/', async (request, response) => {
  try {
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

router.delete('/:id', auth, async (request, response) => {
  try {
    const { id } = request.params
    const eatingPlanDeleted = await eatingPlan.deleteById(id)
    response.json({
      succes: true,
      message: `eatingPlan with id ${id} deleted`,
      data: {
        eatingPlan: eatingPlanDeleted
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
    const eatingPlanUpdate = await eatingPlan.updateById(id, request.body)
    response.json({
      success: true,
      message: `eatingPlan with id ${id} updated`,
      data: {
        eatingPlan: eatingPlanUpdate
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message

    })
  }
})*/
module.exports = router
