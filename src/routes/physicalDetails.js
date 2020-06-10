const express = require('express')
const physicalDetails = require('../usecases/physicalDetails')
const router = express.Router()
const auth = require('../middlewares/auth')

router.get('/:id', auth, (request, response, next) => {
  console.log('middleware en GET/ingredients')
  next()
}, async (request, response) => {
  try {
    const allPhysicalDetails = await physicalDetails.getAll()
    response.json({
      success: true,
      message: '',
      data: {
        ingredients: allPhysicalDetails
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
    const newPhysicalDetails = await physicalDetails.create(request.body)
    response.json({
      success: true,
      message: '',
      data: {
        physicalDetails: newPhysicalDetails.toObject({ virtuals: true })
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

router.patch('/:id', auth, async (request, response) => {
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
