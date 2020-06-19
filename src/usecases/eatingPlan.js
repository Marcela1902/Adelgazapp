const mongoose = require('mongoose')
const EatingPlan = require('../models/eatingPlan')
const Users = require('../models/users')

function getAll () {
  return EatingPlan.find({})
    .populate({
      path: 'diets',
      populate: {
        path: 'dishes',
        populate: {
          path: 'ingredients'
        }
      }
    })
}

async function insertEatingPlan (eatingPlanData) {
  const { allEatingPlan } = eatingPlanData
  var addeatingPlan = allEatingPlan.map((eatingPlan) => {
    var ideatingPlan = new mongoose.Types.ObjectId()
    eatingPlan._id = ideatingPlan
    return eatingPlan
  })
  var totalEatingPlan = await EatingPlan.insertMany(addeatingPlan)
  return totalEatingPlan
}

function create (eatingPlanData) {
  eatingPlanData._id = new mongoose.Types.ObjectId()
  return EatingPlan.create(eatingPlanData)
}

function getFindById (idEatingPlan) {
  return EatingPlan.findById(idEatingPlan)
    .populate({
      path: 'diets',
      populate: {
        path: 'dishes',
        populate: {
          path: 'ingredients'
        }
      }
    })
}

async function getAllEatingPlans (idUser) {
  const userPlans = await Users.findById(idUser)
  const { eatingPlans } = userPlans
  return eatingPlans
}

module.exports = {
  getAll,
  insertEatingPlan,
  create,
  getFindById,
  getAllEatingPlans

}
