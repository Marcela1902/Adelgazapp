const PhysicalDetails = require('../models/physicalDetails')

function getAll () {
  return PhysicalDetails.find({})
    .populate('users')
}
function create (physicalDetailsData) {
  return PhysicalDetails.create(physicalDetailsData)
}

function deleteById (id) {
  return PhysicalDetails.findByIdAndRemove(id)
}

function updateById (id, newPhysicalDetailsData) {
  return PhysicalDetails.findByIdAndUpdate(id, newPhysicalDetailsData, { new: true })
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById
}
