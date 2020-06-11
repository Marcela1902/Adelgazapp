const mongoose = require('mongoose')
const Ingredients = require('../models/ingredients')

function getAll (id) {
  return Ingredients.find({})
}

function create (ingredientsData) {
  ingredientsData._id = new mongoose.Types.ObjectId()
  return Ingredients.create(ingredientsData)
}

function deleteById (id) {
  return Ingredients.findByIdAndRemove(id)
}

function updateById (id, newIngredientsData) {
  return Ingredients.findByIdAndUpdate(id, newIngredientsData)
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById
}
