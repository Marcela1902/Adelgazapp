const { EatingPlan } = require('../models/eatingPlan')
const PhysicalDetails = require('../models/physicalDetails')
const Users = require('../models/users')

function getAll () {
  return PhysicalDetails.find({})
}

async function create (idUser, physicalDetailsData) {
  const user = await Users.findById(idUser)
  if (!user) throw new Error('User does not exist with id: ' + idUser)
  if (user.idTest) throw new Error('El test ya fue realizado')
  const physicalDetails = await PhysicalDetails.create(physicalDetailsData)
  const { _id: idTest, physiognomy, objective } = physicalDetails
  Users.findByIdAndUpdate(idUser, { idTest })
  const eatingPlans = EatingPlan.find({ objective }).limit(1)
  if (!eatingPlans) throw new Error('No hay planes con este objetivo: ' + objective)
<<<<<<< HEAD
  return { eatingPlans, physiognomy }
=======
  return { eatingPlans, physiognomy } 
  console.log(eatingPlans)
>>>>>>> 014d7bfd002fcf57da7ab7baa727fea5e5e2661d
}

function findById (idTest) {
  return PhysicalDetails.findById(idTest)
}

module.exports = {
  getAll,
  create,
  findById
}
