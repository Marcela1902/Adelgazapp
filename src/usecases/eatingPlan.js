const { EatingPlan } = require('../models/eatingPlan')

function getAll () {
  return EatingPlan.find({})
    .populate('diets')
}

async function create (eatingPlanData) {
  return EatingPlan.create(eatingPlanData)
}

function deleteById (id) {
  return EatingPlan.findByIdAndRemove(id)
}

function updateById (id, newEatingPlanData) {
  return EatingPlan.findByIdAndUpdate(id, newEatingPlanData)
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById
}
