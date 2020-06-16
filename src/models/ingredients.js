const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ingredientsSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true

  },
  grams: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String

  },
  _id: Schema.Types.ObjectId
})

module.exports = mongoose.model('ingredients', ingredientsSchema)
