const { EatingPlan } = require('../models/eatingPlan')
const PhysicalDetails = require('../models/physicalDetails')
const Users = require('../models/users')

function getAll () {
  return PhysicalDetails.find({})
}

async function create (idUser, physicalDetailsData) {
  const user = await Users.findById(idUser)
  if (user.idTest) throw new Error('El test ya fue relizado')
  console.log(user)
  const physicalDetails = await PhysicalDetails.create(physicalDetailsData)
  const { _id: idTest, physiognomy, objective } = physicalDetails
  await Users.findByIdAndUpdate(idUser, { idTest })
  const eatingPlans = EatingPlan.find({ objective }).limit(1)
  /* if (!eatingPlans) throw new Error('No hay planes con este objetivo: ' + objective)
  return { eatingPlans, physiognomy } 
  console.log(eatingPlans)
}

function findById (idTest) {
  return PhysicalDetails.findById(idTest)
}

module.exports = {
  getAll,
  create,
  findById
}
