const mongoose = require('mongoose')
const Schema = mongoose.Schema
const dishesSchema = new mongoose.Schema({

  _id: Schema.Types.ObjectId,
  foodName: {
    type: String,
    required: true
  },
  foodType: {
    type: String,
    enum: ['desayuno', 'comida', 'cena'],
    required: true
  },

  ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredients' }]

})

module.exports = mongoose.model('dishes', dishesSchema)
