const mongoose = require('mongoose')
const Schema = mongoose.Schema
const physicalDetailsSchema = new mongoose.Schema({
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    enum: ['hombre', 'mujer'],
    required: true
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
    enum: ['pocoActivo', 'activo', 'muyActivo'],
    required: true
  },
  fatPercentage: {
    type: String,
    enum: ['pesoNormal', 'delgadezAceptable', 'sobrePeso'],
    required: true
  },
  objective: {
    type: String,
    enum: ['adelgazar', 'volumen', 'tonificar'],
    required: true
  },
  users: [{ type: Schema.Types.ObjectId, ref: 'users' }]

  /* _id: Schema.Types.ObjectId */
})

physicalDetailsSchema.virtual('physiognomy').get(function () {
  if (this.diameter >= 15 && this.diameter <= 17.5) {
    return (ectomorfo)
  } else if (this.diameter >= 17.5 && this.diameter <= 20) {
    return (mesomorfo)
  } else if (this.diameter >= 20) {
    return (endomorfo)
  }
  return 'no reconocido'
})
module.exports = mongoose.model('PhysicalDetails', physicalDetailsSchema)
