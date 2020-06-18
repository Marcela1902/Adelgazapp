const mongoose = require('mongoose')
const Users = require('../models/users')
const Direction = require('../models/direction')

function getAll () {
  return Direction.find({})
}

function create (directionData) {
  directionData._id = new mongoose.Types.ObjectId()
  return Direction.create(directionData)
}

async function createAddress (idUser, directionData) {
  directionData._id = new mongoose.Types.ObjectId()
  const address = await Direction.create(directionData)
  const { _id } = address
  const user = await Users.findByIdAndUpdate(idUser, { direction: _id })
  return user
}

async function findAddress (idDirection) {
  const direction = await Direction.findById(idDirection)
  return direction
}

module.exports = {
  getAll,
  findAddress,
  createAddress,
  create
}
