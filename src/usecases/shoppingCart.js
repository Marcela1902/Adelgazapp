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
    return dishes
  })

  let arrayIngredients = []

  arrayDiets.forEach((ingredient) => {
    const { ingredients } = ingredient[0]
    const allIngredients = ingredients.reduce((acum, item) => {
      acum = [...acum, item]
      return acum
    }, [])
    arrayIngredients = [...arrayIngredients, ...allIngredients]
  })

  // const arrayPrices = arrayIngredients.map(({ price }) => {
  //   return price
  // })
  // console.log(arrayPrices)

  // const newArrayPrices = arrayPrices.reduce((acum, price) => {
  //   return acum + price
  // }, 0)
  // return { newArrayPrices }

  // const uniqueSet = new Set(arrayPrices)
  // const newArrayPrices = [...uniqueSet]
  // Array.from(new Set(newArrayPrices))
  // newArrayPrices.filter((item, index) => newArrayPrices.indexOf(item) !== index)
  // newArrayPrices.reduce((acum, price) => {
  //   return acum + price
  // }, 0)
  // return newArrayPrices
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
