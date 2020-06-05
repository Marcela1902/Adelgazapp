const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')
const eatingPlan= require('../models/eatingPlan')

function getAll () {
    return eatingPlan.find({})
  }


function create (eatingPlanData) {
  return eatingPlan.create(eatingPlanData)
}

function deleteById (id) {
    return eatingPlan.findByIdAndRemove(id)
  }
  
  function updateById (id, neweatingPlanData) {
    return eatingPlan.findByIdAndUpdate(id, neweatingPlanData, { new: true })
  }
  
  module.exports = {
    getAll,
    create,
    deleteById,
    updateById
  }
  