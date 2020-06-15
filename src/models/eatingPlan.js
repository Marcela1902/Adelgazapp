const mongoose = require('mongoose')
const Schema = mongoose.Schema
const eatingPlanSchema = new mongoose.Schema({

  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  objective: {
    type: String,
    enum: ['adelgazar', 'volumen', 'tonificar'],
    required: true
  },
  diets: [{ type: Schema.Types.ObjectId, ref: 'diets' }]

})

const EatingPlan = mongoose.model('eatingPlan', eatingPlanSchema)

module.exports = {
  EatingPlan
}
