const express = require('express')
const physicalDetails = require('../usecases/physicalDetails')
const { EatingPlan } = require('../models/eatingPlan')
const router = express.Router()

//Te trae el eatingPlan y el tipo de fisionomia 
router.get('/eatingPlan/:idUser', async (request, response) => {
  const { idUser } = request.params
  try {
    const newPhysicalDetails = await physicalDetails.insertPlan(idUser)
    const { diameter } = newPhysicalDetails
    const ectomorfo = {
      type: 'Ectomorfo',
      description: ' El cuerpo ectomorfo es delgado con extremidades largas' +
        ' y bajo peso normalmente.Suele tener un metabolismo acelerado.Este tipo de cuerpo no gana' +
        'músculos con facilidad si bien deben hacer diversos tipos de ejercicios para estar más fuertes al tener aspecto' +
        'frágil y hombros más bien pequeños.'
    }
    const mesomorfo = {
      type: 'Mesomorfo',
      description: 'Los mesomorfos son personas de contextura atlética que tienen sus músculos bastante bien desarrollados.' +
        ' Son muy fuertes y no deben de preocuparse por ganar o por perder peso pues su metabolismo funciona a la perfección.'
    }
    const endomorfo = {
      type: 'Endomorfo',
      description: 'El cuerpo endomorfo, es un cuerpo redondeado y  con una tendencia natural a acumular grasa.' +
        ' Su metabolismo es más lento: es decir, el endomorfo quema menos calorías en estado de reposo.' +
        ' En general tiene menor tolerancia al carbohidrato.'
    }
    var physionomy

    if (diameter >= 15 && diameter <= 17.5) {
      physionomy = ectomorfo
    } else if (diameter >= 17.5 && diameter <= 20) {
      physionomy = mesomorfo
    } else if (diameter >= 20) {
      physionomy = endomorfo
    }

    response.json({
      success: true,
      message: '',
      data: {
        newPhysicalDetails,
        physionomy

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
