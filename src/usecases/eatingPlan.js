const mongoose = require('mongoose')
const { EatingPlan } = require('../models/eatingPlan')

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

function filterByObjective (objective) {
  return EatingPlan.find({ objective })
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

function create (eatingPlanData) {
  eatingPlanData._id = new mongoose.Types.ObjectId()
  return EatingPlan.create(eatingPlanData)
}

module.exports = {
  getAll,
  insertEatingPlan,
  create,
  filterByObjective

}
