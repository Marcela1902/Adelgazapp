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
  create,
  filterByObjective

}
