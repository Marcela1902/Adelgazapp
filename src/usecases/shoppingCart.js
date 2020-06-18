const mongoose = require('mongoose')
const ShoppingCart = require('../models/shoppingCart')
const EatingPlan = require('../models/eatingPlan')

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

  var arrayIngredients = []

  arrayDiets.forEach((ingredient) => {
    const { ingredients } = ingredient[0]
    const allIngredients = ingredients.reduce((accum, item) => {
      accum = [...accum, item]
      return accum
    }, [])
    arrayIngredients = [...arrayIngredients, ...allIngredients]
  })

  const reduceCategory = arrayIngredients.reduce((ordered, articleItem) => {
    const currentCategoriesArray = ordered[articleItem.name] || []
    return {
      ...ordered,
      [articleItem.name]: [...currentCategoriesArray, articleItem]
    }
  }, [])

  const objEntries = Object.entries(reduceCategory)
  let allIngredients = []
  objEntries.forEach(ingredient => {
    if (ingredient[1].length > 1) {
      ingredient[1][0].price = ingredient[1][0].price * ingredient[1].length
      ingredient[1][0].grams = ingredient[1][0].grams * ingredient[1].length
    }
    allIngredients = [...allIngredients, ingredient[1][0]]
  })
  return allIngredients
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
