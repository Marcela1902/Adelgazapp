const mongoose = require('mongoose')
const EatingPlan= require ('../models/eatingPlan')
const PhysicalDetails = require('../models/physicalDetails')
const Users = require('../models/users')

function getAll () {
  return PhysicalDetails.find({})
}
async function create (idUser, physicalDetailsData) {
  /* physicalDetailsData._id = new mongoose.Types.ObjectId() */
  const physicalDetails = await PhysicalDetails.create(physicalDetailsData)
  const { _id: idTest, physiognomy, objective } = physicalDetails
  await Users.findByIdAndUpdate(idUser, { idTest })
  const eatingsPlan = EatingPlan.find({ objective })
  return { physiognomy, eatingsPlan }

  /* const detail = await Users.findByIdAndUpdate(idUser, {
    $set: {
      idTest: _id
    }
  })
  console.log(detail)
  console.log (physicalDetails.toObject({ virtuals: true }))
  console.log (idUser)
  return (detail) */
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
