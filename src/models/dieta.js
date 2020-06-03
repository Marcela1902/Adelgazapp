const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  dietData: {
    name: String,
    description: String,
    ingredients: String,
    grams: Number
  },
  typeDietNormal: {

  },
  typeDietVegetarian: {

  },
  typeDietKeto: {

  }

})
