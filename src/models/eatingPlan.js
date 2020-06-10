const mongoose = require('mongoose')
const Schema = mongoose.Schema
const eatingPlanSchema = new mongoose.Schema({

  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  description: String,
  enum:['quemar grasa,  hacer musculo, cena'],
  diets: [{ type: Schema.Types.ObjectId, ref: 'diets' }]

})
  
const dietsSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  dishes: [{ type: Schema.Types.ObjectId, ref: 'Dishes' }],
});

const Diets = mongoose.model(' diets', dietsSchema)
const EatingPlan = mongoose.model(' eatingPlan', eatingPlanSchema)
 
module.exports = {
Diets,
EatingPlan
}
