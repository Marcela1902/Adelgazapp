const mongoose = require('mongoose')
const Schema = mongoose.Schema
const dishesSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
    name: {
      type: String,
      required: true
    },
  
  
    /*user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },*/
    ingredients: [{ type: Schema.Types.ObjectId, ref: 'ingredients' }], 
    
})

module.exports = mongoose.model('dishes', dishesSchema)
