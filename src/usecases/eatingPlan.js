const {EatingPlan,Diets} = require('../models/eatingPlan')


function getAll () {
  eatingPlan.
  findOne({ name: 'String' }).
  populate({
    path: 'Diets',
    
    populate: { path: 'Diets' }
  });
  return EatingPlan.find(id)
}

async function create (eatingPlanData) {
  
 
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
