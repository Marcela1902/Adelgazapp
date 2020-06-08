const mongoose = require('mongoose')
const Schema = mongoose.Schema
const eatingPlanSchema = new mongoose.Schema({
  eatingPlan: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      maxlength: 400
    },
    foodType: {
      type: String,
      required: true,
      enum: ['desayuno', 'almuerzo', 'comida', 'cena']
    },
    diets: {
      name: {
        type: String,
        required: true,
        enum: ['dieta de volumen', 'dieta de tonificacion', 'dieta para adelgazar']
      },
      category: {
        type: String,
        required: true
      }
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    dishes: {
      type: Schema.Types.ObjectId,
      ref: 'dishes'
    }

  }
})
module.exports = mongoose.model(' eatingPlan', eatingPlanSchema)
