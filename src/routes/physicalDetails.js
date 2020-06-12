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


router.get('/idTest', async (request, response) => {
  try {
    const allPhysicalDetails = await physicalDetails.findById()
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

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const physicalDetailsDeleted = await physicalDetails.deleteById(id)
    response.json({
      success: true,
      message: `${id} `,
      data: {
        ingredient: physicalDetailsDeleted
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

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const physicalDetailsUpdate = await physicalDetails.updateById(id, request.body)
    response.json({
      success: true,
      message: ` ${id} `,
      data: {
        ingredient: physicalDetailsUpdate
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
