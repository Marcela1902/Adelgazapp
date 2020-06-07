const mongoose = require('mongoose')
const Schema = mongoose.Schema
const dishesSchema = new mongoose.Schema({
  diets: {
    name: {
      type: String,
      required: true
    },
    ingredients: {
      type: String,
      required: true
    },
    grams: {
      type: Number,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  }
})
module.exports = mongoose.model('diets', dishesSchema)
