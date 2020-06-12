const mongoose = require('mongoose')
const shoppingCart = require('../models/shoppingCart')

function getAll () {
  return shoppingCart.find({})
}

function create (shoppingCartData) {
  shoppingCartData._id = new mongoose.Types.ObjectId()
  return shoppingCart.create(shoppingCartData)
}

module.exports = {
  getAll,
  create
}
