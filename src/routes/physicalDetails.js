const express = require('express')
const physicalDetails = require('../usecases/physicalDetails')
const { EatingPlan } = require('../models/eatingPlan')
const router = express.Router()

/* router.get('/idT', async (request, response) => {
  const { idTest } = request.params
  try {
    const newPhysicalDetails = await physicalDetails.findById(idTest)
    const test = newPhysicalDetails.toObject({ virtuals: true })
    const { objective } = newPhysicalDetails
    const { physiognomy } = test
    const { type, description } = physiognomy
    response.json({
      success: true,
      message: '',
      data: {
        type,
        description,
        objective
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
 */
/* router.get('/:idUser', async (request, response) => {
  const { idUser } = request.params
  try {
    const newTest = await physicalDetails.infoTest(idUser)
    const { eatingPlans } = newTest
    response.json({
      success: true,
      message: '',
      data: {
        eatingPlans
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
 */

// Regresa un error si el test ya fue realizado
router.get('/:idUser', async (request, response) => {
  const { idUser } = request.params
  try {
    const idTestFound = await physicalDetails.getIdTest(idUser)
    response.json({
      success: true,
      message: '',
      data: {
        idTestFound
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

router.post('/:idUser', async (request, response) => {
  const { idUser } = request.params
  const body = request.body
  try {
    const newPhysicalDetails = await physicalDetails.createTest(idUser, body)
    response.json({
      success: true,
      message: '',
      data: {
        ...newPhysicalDetails
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
