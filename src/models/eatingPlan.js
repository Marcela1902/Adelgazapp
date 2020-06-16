const mongoose = require('mongoose')
const Schema = mongoose.Schema
const eatingPlanSchema = new mongoose.Schema({

  _id: Schema.Types.ObjectId,
  description: {
    type: String
  },
  objective: {
    type: String,
    enum: ['adelgazar', 'volumen', 'tonificar'],
    required: true
  },
  diets: [{ type: Schema.Types.ObjectId, ref: 'diets' }],
  dishes: [{ type: Schema.Types.ObjectId, ref: 'dishes' }],
  ingredients: [{ type: Schema.Types.ObjectId, ref: 'ingredients' }]

})

const EatingPlan = mongoose.model('eatingPlan', eatingPlanSchema)

module.exports = {
  EatingPlan
}
