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

async function insertIngredients (ingredientsData) {
  const { allIngredients } = ingredientsData
  var addIngredients = allIngredients.map((ingredient) => {
    var idIngredient = new mongoose.Types.ObjectId()
    ingredient._id = idIngredient
    return ingredient
  })
  var totalIngredients = await Ingredients.insertMany(addIngredients)
  return totalIngredients
}

module.exports = {
  getAll,
  insertIngredients,
  create
}
