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

async function insertDiets (dietsData) {
  const { allDiets } = dietsData
  var addDiets = allDiets.map((diets) => {
    var idDiets = new mongoose.Types.ObjectId()
    diets._id = idDiets
    return diets
  })
  var totalDiets = await Diets.insertMany(addDiets)
  return totalDiets
}

async function create (dietsData) {
  dietsData._id = new mongoose.Types.ObjectId()
  return Diets.create(dietsData)
}

module.exports = {
  create,
  insertDiets,
  getAll
}
