const mongoose = require('mongoose')
const dishesSchema = new mongoose.Schema({
  diets: {
    name: {
      type: String,
      require: true
    },
    ingredients: {
      type: String,
      require: true
    },
    grams: {
      type: Number,
      require: true
    }
  }
})
module.exports = mongoose.model('diets', dishesSchema)
