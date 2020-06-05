const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')
const dishes = require('../models/dishes')

function getAll () {
    return dishes.find({})
  }


function create (dishesData) {
  return diets.create(dishesData)
}

function deleteById (id) {
    return dishes.findByIdAndRemove(id)
  }
  
  function updateById (id, newddishesData) {
    return dishes.findByIdAndUpdate(id, newdishesData, { new: true })
  }
  
  module.exports = {
    getAll,
    create,
    deleteById,
    updateById
  }
  