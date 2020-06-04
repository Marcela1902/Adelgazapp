const mongoose = require('mongoose')
const ingredientsSchema = new mongoose.Schema({
  ingredients: {
    name: {
      type: String,
      require: true
    },
    grams: {
      type: Number,
      require: true
    },
    price: {
      type: Number,
      require: true
    }
  }
})
module.exports = mongoose.model('ingredients', ingredientsSchema)
