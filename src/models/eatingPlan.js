const mongoose = require('mongoose')
const Schema = mongoose.Schema
const eatingPlanSchema = new mongoose.Schema({

  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  description: String,
  enum: ['adelgazar,  volumen, tonificar'],
  diets: [{ type: Schema.Types.ObjectId, ref: 'diets' }]

})
const dietsSchema = Schema({
  name: { type: Schema.Types.ObjectId, ref: 'eatingPlan' },
  dishes: [{ type: Schema.Types.ObjectId, ref: 'dishes' }]
})
// const dietsSchema = Schema({
//   _id: Schema.Types.ObjectId,
//   name: {
//     type: String,
//     required: true
//   },
//   dishes: [{ type: Schema.Types.ObjectId, ref: 'Dishes' }]
// })

const Diets = mongoose.model(' diets', dietsSchema)
const EatingPlan = mongoose.model(' eatingPlan', eatingPlanSchema)

module.exports = {
  Diets,
  EatingPlan
}
