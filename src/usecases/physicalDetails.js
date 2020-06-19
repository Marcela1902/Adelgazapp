const EatingPlan = require('../models/eatingPlan')
const PhysicalDetails = require('../models/physicalDetails')
const Users = require('../models/users')
const { randomElements } = require('../utils/functions/random')

function getAll() {
  return PhysicalDetails.find({})
}

async function createTest (idUser, physicalDetailsData) {
  const user = await Users.findById(idUser)
  if (!user) throw new Error('User does not exist with id: ' + idUser)
  if (user.idTest) throw new Error('El test ya fue realizado')
  const physicalDetails = await PhysicalDetails.create(physicalDetailsData)
  const { _id: idTest } = physicalDetails
  await Users.findByIdAndUpdate(idUser, { idTest })
  return user
}

async function insertPlan (idUser) {
  const user = await Users.findById(idUser)
  console.log(user)
  const { idTest } = user
  const test = await PhysicalDetails.findById(idTest)
  const { objective, diameter } = test
  const eatingPlan = await EatingPlan.find({ objective })
  const randomPlan = randomElements(eatingPlan, 1)
  const { _id: idEatingPlan } = randomPlan[0]
  const userEatingPlan = await Users.findByIdAndUpdate(idUser, {
    $push: { eatingPlans: idEatingPlan }
  })
  return { userEatingPlan, objective, diameter }
}

async function infoTest (idUser) {
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

module.exports = {
  getAll,
  findById,
  infoTest,
  createTest,
  insertPlan
}
