const Dishes = require('../models/dishes')

function getAll () {
  
    return Dishes.find({}).populate('ingredients')
    
  }


function create (dishesData) {
  return Dishes.create(dishesData)
}

function deleteById (id) {
    return Dishes.findByIdAndRemove(id)
  }
  
  function updateById (id, newDishesData) {
    return Dishes.findByIdAndUpdate(id, newDishesData, { new: true })
  }
  
  module.exports = {
    getAll,
    create,
    deleteById,
    updateById
  }
  