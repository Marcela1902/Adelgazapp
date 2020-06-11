const mongoose = require('mongoose')
const Diets = require('../models/diets')

function getAll () {
  return Diets.find({})
    .populate({
      path: 'dishes',
      populate: {
        path: 'ingredients'
      }
    })
}

async function create (dietsData) {
  dietsData._id = new mongoose.Types.ObjectId()
  return Diets.create(dietsData)
}

module.exports = {
  create,
  getAll
}
