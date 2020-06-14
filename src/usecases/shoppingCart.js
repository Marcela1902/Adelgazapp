const mongoose = require('mongoose')
const ShoppingCart = require('../models/shoppingCart')
// const Ingredients = require('../models/ingredients')
// const Users = require('../models/users')
// const EatingPlan = require('../models/eatingPlan')
// const Diets = require('../models/diets')
// const

function getAll () {
  return ShoppingCart.find({})
    .populate({
      path: 'users',
      populate: {
        path: 'eatingPlan',
        populate: {
          path: 'ingredients',
          populate: {
            path: 'direction'
          }
        }
      }
    })
}

// async function getTotalPriceBuy (idUser) {
//   const users = await Users.findById(idUser)
//   if (users) throw new Error('el idUser ya existe')
//   const eatingPlan = await EatingPlan.findById(idEatingPlan)
//   const diets = await Diets.findById(idDiets)
//   diets.map((item) => {

//   })
//   const dishes = await Dishes.findById(idDishes)
//   const ingredients = await Ingredients.findById(idIngredients)

//   const newOrder = await ingredients.map((price) => {
//     const { name, grams, ...restProperties } = price
//     return restProperties
//   })

//   const sumaTotal = newOrder.reduce((accum, ingredients) => {
//     return accum + ingredients.price
//   }, 0)
//   return sumaTotal
// }

function create (shoppingCartData) {
  shoppingCartData._id = new mongoose.Types.ObjectId()
  return ShoppingCart.create(shoppingCartData)
}

module.exports = {
  getAll,
  // getTotalPriceBuy,
  create
}
