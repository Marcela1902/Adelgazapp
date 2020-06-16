const mongoose = require('mongoose')
const ShoppingCart = require('../models/shoppingCart')
const Ingredients = require('../models/ingredients')
const Users = require('../models/users')
const EatingPlan = require('../models/eatingPlan')
const Diets = require('../models/diets')
const Dishes = require('../models/dishes')

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

async function getTotalPriceBuy (idEatingPlan) {
  const eatingPlanFound = await EatingPlan.findById(idEatingPlan)
    .populate({
      path: 'diets',
      populate: {
        path: 'dishes',
        populate: {
          path: 'ingredients'

        }
      }
    })
  const { diets } = eatingPlanFound
  const arrayDiets = diets.map((diet) => {
    const { dishes } = diet
    const { ingredients } = dishes
    return dishes
  })
  const arrayIngredients = arrayDiets.map((ingredient) => {
    return ingredient
  })

  const { ingredients } = arrayIngredients
  return ingredients

  // const { ingredients } = arrayIngredients
  // const arrayPrices = ingredients.reduce((accum, ingredient) => {
  //   return accum + ingredient.price
  // }, 0)
  // return arrayPrices

  // return arrayIngredients

  // console.log(dish)

  // // const eatingPlans = user.eatingPlans
  // // eatingPlans.forEach((eatingPlan) => {
  // //   const { diets: { dishes: { ingredients } } } = eatingPlan
  // //   // const ingredientsArray = []
  // //   console.log(ingredients)
  // })

  // const dishes = diets.map((diet) => {
  //   return diet.dishes
  // })
  // console.log(diets)
  // const ingredients = dishes.map((dishe) => {
  //   console.log(dishe)
  //   return dishe.ingredients
  // })
  // console.log(ingredients)
  // console.log(eatingPlans)

  // const sumaTotal = newOrder.reduce((accum, ingredients) => {
  //   return accum + ingredients.price
  // }, 0)
  // return eatingPlans
}

function create (shoppingCartData) {
  shoppingCartData._id = new mongoose.Types.ObjectId()
  return ShoppingCart.create(shoppingCartData)
}

module.exports = {
  getAll,
  getTotalPriceBuy,
  create
}
