const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')
const diets = require('../models/diets')

function getAll () {
    return diets.find({})
  }


function create (dietsData) {
  return diets.create(dietsData)
}

function deleteById (id) {
    return diets.findByIdAndRemove(id)
  }
  
  function updateById (id, newdietsData) {
    return diets.findByIdAndUpdate(id, newdietsData, { new: true })
  }
  
  module.exports = {
    getAll,
    create,
    deleteById,
    updateById
  }
  