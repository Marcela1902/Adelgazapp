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
    enum: ['adelgazar,  volumen, tonificar'],
    required: true
  }
  /* _id: Schema.Types.ObjectId */
})
const ectomorfo = {
  type: 'Ectomorfo',
  image: String,
  description: ' El cuerpo ectomorfo es delgado con extremidades largas' +
    ' y bajo peso normalmente.Suele tener un metabolismo acelerado.Este tipo de cuerpo no gana' +
    'músculos con facilidad si bien deben hacer diversos tipos de ejercicios para estar más fuertes al tener aspecto' +
    'frágil y hombros más bien pequeños.'
}
const mesomorfo = {
  type: 'Mesomorfo',
  image: String,
  description: 'Los mesomorfos son personas de contextura atlética que tienen sus músculos bastante bien desarrollados.' +
    ' Son muy fuertes y no deben de preocuparse por ganar o por perder peso pues su metabolismo funciona a la perfección.'
}
const endomorfo = {
  type: 'Endomorfo',
  image: String,
  description: 'El cuerpo endomorfo, es un cuerpo redondeado y  con una tendencia natural a acumular grasa.' +
    ' Su metabolismo es más lento: es decir, el endomorfo quema menos calorías en estado de reposo.' +
    ' En general tiene menor tolerancia al carbohidrato.'
}
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
