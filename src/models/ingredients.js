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
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'users'
  // },
  dishes: {
    type: Schema.Types.ObjectId,
    ref: 'dishes'
  }
  // eatingPlan: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'eatingPlan'
  // }

})
module.exports = mongoose.model('ingredients', ingredientsSchema)
