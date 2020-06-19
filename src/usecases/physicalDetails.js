const EatingPlan = require('../models/eatingPlan')
const PhysicalDetails = require('../models/physicalDetails')
const Users = require('../models/users')
const { randomElements } = require('../utils/functions/random')

function getAll() {
  return PhysicalDetails.find({})
}
async function create(idUser, physicalDetailsData) {
  const user = await Users.findById(idUser)
  if (!user) throw new Error('User does not exist with id: ' + idUser)
  if (user.idTest) throw new Error('El test ya fue realizado')
  const physicalDetails = await PhysicalDetails.create(physicalDetailsData)
  const { _id: idTest, objective } = physicalDetails
  await Users.findByIdAndUpdate(idUser, { idTest })
  const eatingPlans = await EatingPlan.find({ objective })
  const onePlan = randomElements(eatingPlans, 1)
  const { _id: idEatingPlant } = onePlan[0]
  const userEatingPlan = await Users.findByIdAndUpdate(idUser, {
    $push: { eatingPlans: idEatingPlant }
  })
  if (!onePlan) throw new Error('No hay planes con este objetivo: ' + objective)
  return { eatingPlans, objective, idTest, userEatingPlan }
}

async function infoTest(idUser) {
  const user = await Users.findById(idUser)
    .populate({
      path: 'eatingPlans idTest',
      populate: {
        path: 'diets dishes ingredients',
        populate: {
          path: 'dishes',
          populate: {
            path: 'ingredients'
          }
        }
      }
    })
  return user
}

function findById(idTest) {
  return PhysicalDetails.findById(idTest)
}

async function getIdTest (idUser) {
  var findUser = await Users.findById(idUser)
  const { idTest } = findUser
  if (idTest) throw new Error('testPerform')
  return findUser
}

module.exports = {
  getAll,
  create,
  findById,
  infoTest,
  getIdTest
}
