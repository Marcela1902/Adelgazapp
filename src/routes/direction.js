const express = require('express')
const direction = require('../usecases/direction')
const router = express.Router()
// const auth = require('../middlewares/auth')

router.get('/', async (request, response) => {
  try {
    const allDirection = await direction.getAll()
    response.json({
      success: true,
      message: 'all directions',
      data: {
        direction: allDirection
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

router.get('/userDirection/:idUser', async (request, response) => {
  try {
    const allDirection = await direction.getAll()
    response.json({
      success: true,
      message: 'all directions',
      data: {
        direction: allDirection
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

router.get('/:idDirection', async (request, response) => {
  const { idDirection } = request.params
  try {
    const idDirec = await direction.findAddress(idDirection)
    response.json({
      success: true,
      message: 'all directions',
      data: {
        direction: idDirec
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
  try {
    const newDirection = await direction.createAddress(idUser, request.body)
    response.json({
      success: true,
      message: 'direction add',
      data: {
        direction: newDirection
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
