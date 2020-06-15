const mongoose = require('mongoose')
const { Direction } = require('../models/direction')

function getAll () {
  return Direction.find({})
}

function create (directionData) {
  directionData._id = new mongoose.Types.ObjectId()
  return Direction.create(directionData)
}

module.exports = {
  getAll,
  create
}
