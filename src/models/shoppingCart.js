const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shoppingCartSchema = new mongoose.Schema({

  idDirection: {
    type: Schema.Types.ObjectId,
    ref: 'direction'
  },
  data: {
    type: Date
  },

  ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredients' }]

})
module.exports = mongoose.model('shoppingCart', shoppingCartSchema)
