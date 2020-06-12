const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shoppingCartSchema = new mongoose.Schema({
  idDirection: {
    type: Schema.Types.ObjectId,
    ref: 'direction'
  },
  ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredients' }]
  /* fecha:{

  } */
})
module.exports = mongoose.model('shoppingCart', shoppingCartSchema)
