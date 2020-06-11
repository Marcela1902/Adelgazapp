const mongoose = require('mongoose')
const { EatingPlan } = require('../models/eatingPlan')

// este el end point en el que seguimos trabajando

// function getAll() {
//   return EatingPlan.find({})
//     .populate({
//       path: 'diets',
//       populate: [{
//         path: 'dishes',
//         model: 'dishes',
//         populate: [{
//           path: 'Ingredients',
//           model: '',
//           select: 'firstname lastname'
//         }]
//       }]
//     })
// }

function create (eatingPlanData) {
  eatingPlanData._id = new mongoose.Types.ObjectId()
  return EatingPlan.create(eatingPlanData)
}

module.exports = {
  // getAll,
  create

}
