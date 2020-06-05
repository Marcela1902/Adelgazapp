const mongoose = require('mongoose')
const eatingPlanSchema = new mongoose.Schema({
  eatingPlan: {
    name: {
      type: String,
      require: true
    },
    description: {
      type: String,
      maxlength: 400
    },
    foodName: {
      type: String,
      require: true
    }

  }
})
module.exports = mongoose.model(' eatingPlan', eatingPlanSchema)
