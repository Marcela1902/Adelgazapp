const mongoose = require('mongoose')
const Schema = mongoose.Schema
const eatingPlanSchema = new mongoose.Schema({

  id: Schema.Types.ObjectId,
  name: String,
  description: String,
  enum:['desayuno, comida, cena'],
  dishes: [{ type: Schema.Types.ObjectId, ref: 'user' }]
})
  
const dietsSchema = Schema({
  name: { type: Schema.Types.ObjectId, ref: 'eatingPlan' },
  eatingPlan: [{ type: Schema.Types.ObjectId, ref: 'dishes' }],
});

const Diets = mongoose.model(' diets', dietsSchema)
const EatingPlan = mongoose.model(' eatingPlan', eatingPlanSchema)
 
module.exports = {
Diets,
EatingPlan
}
