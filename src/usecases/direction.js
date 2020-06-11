// const mongoose = require('mongoose')
const direction = require('../models/direction')

function getAll () {
  return direction.find({})
}

function create (directionData) {
  // directionData._id = new mongoose.Types.ObjectId()
  return direction.create(directionData)
}

module.exports = {
  getAll,
  create
}
