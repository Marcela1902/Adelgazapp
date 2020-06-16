const mongoose = require('mongoose')
const Dishes = require('../models/dishes')

function getAll () {
  return Dishes.find({})
    .populate('Ingredients')
}

function create (dishesData) {
  dishesData._id = new mongoose.Types.ObjectId()
  return Dishes.create(dishesData)
}
async function insertDishes (dishesData) {
  const { allDishes } = dishesData
  var addDishes = allDishes.map((dishes) => {
    var idDishes = new mongoose.Types.ObjectId()
    dishes._id = idDishes
    return dishes
  })
  var totalDishes = await Dishes.insertMany(addDishes)
  return totalDishes
}

module.exports = {
  getAll,
  insertDishes,
  create

}
