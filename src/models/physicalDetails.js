const mongoose = require('mongoose')
const physicalDetailsSchema = new mongoose.Schema({
  age: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    ref: 'users',
    enum: ['hombre', 'mujer']
  },
  diameter: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  exercise: {
    type: String,
    enum: ['poco activo', 'activo', 'muy activo'],
    required: true
  },
  fatPercentage: {
    type: String,
    enum: ['peso normal', 'delgadez aceptable', 'sobrepeso'],
    required: true
  },
  objective: {
    type: String,
    enum: ['dieta de volumen', 'dieta de tonificacion', 'dieta para adelgazar'],
    required: true,
    ref: 'eatingPlan'
  }
})
physicalDetailsSchema.virtual('physiognomy').get(function () {
  if (this.diameter >= 15 && this.diameter <= 17.5) {
    return 'Ectomorfo'
  } if (this.diameter >= 17.5 && this.diameter <= 20) {
    return 'Mesomorfo'
  } else (this.diameter >= 20)
  return 'Endomorfo'
})

module.exports = mongoose.model('physicalDetails', physicalDetailsSchema)
