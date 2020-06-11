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

module.exports = {
  getAll,
  create

}
