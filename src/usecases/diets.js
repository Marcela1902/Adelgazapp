const mongoose = require('mongoose')
const { Diets } = require('../models/eatingPlan')

function getAll () {
  return Diets.find({})
    .populate('dishes')
}

async function create (dietsData) {
  dietsData._id = new mongoose.Types.ObjectId()
  return Diets.create(dietsData)
}

module.exports = {
  create,
  getAll
}
