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

const ectomorfo = {
  type: 'Ectomorfo',
  description: ' El cuerpo ectomorfo es delgado con extremidades largas' +
    'y bajo peso normalmente.Suele tener un metabolismo acelerado.Este tipo de cuerpo no gana' +
    'músculos con facilidad si bien deben hacer diversos tipos de ejercicios para estar más fuertes al tener aspecto' +
    'frágil y hombros más bien pequeños.'
}
const mesomorfo = {
  type: 'Mesomorfo',
  description: 'Los mesomorfos son personas de contextura atlética que tienen sus músculos bastante bien desarrollados.' +
    'Son muy fuertes y no deben de preocuparse por ganar o por perder peso pues su metabolismo funciona a la perfección.'
}
const endomorfo = {
  type: 'Endomorfo',
  description: ' Endomorfo: El cuerpo endomorfo, es un cuerpo redondeado y  con una tendencia natural a acumular grasa.' +
    'Su metabolismo es más lento: es decir, el endomorfo quema menos calorías en estado de reposo.' +
    'En general tiene menor tolerancia al carbohidrato.'
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

module.exports = mongoose.model('physicalDetails', physicalDetailsSchema)
