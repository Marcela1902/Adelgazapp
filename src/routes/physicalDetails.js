const express = require('express')
const physicalDetails = require('../usecases/physicalDetails')
const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allPhysicalDetails = await physicalDetails.getAll()
    response.json({
      success: true,
      message: '',
      data: {
        physicalDetails: allPhysicalDetails
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

router.get('/:idTest', async (request, response) => {
  const { idTest } = request.params
  try {
    const newPhysicalDetails = await physicalDetails.findById(idTest)
    const test = newPhysicalDetails.toObject({ virtuals: true })
    const { physiognomy } = test
    const { type, description } = physiognomy
    response.json({
      success: true,
      message: '',
      data: {
        type,
        description
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
    const newPhysicalDetails = await physicalDetails.create(idUser, body)
    response.json({
      success: true,
      message: '',
      data: {
        userPhysicalDetail: newPhysicalDetails
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
