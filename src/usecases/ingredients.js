const Ingredients = require('../models/ingredients')

function getAll (id) {
  return Ingredients.find(id)
}

function create (ingredientsData) {
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
