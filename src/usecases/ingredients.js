const mongoose = require('mongoose')
const Ingredients = require('../models/ingredients')

function getAll (id) {
  return Ingredients.find({})
    .populate('ingredients')
}

function create (ingredientsData) {
  ingredientsData._id = new mongoose.Types.ObjectId()
  return Ingredients.create(ingredientsData)
}

module.exports = {
  getAll,
  create
}
