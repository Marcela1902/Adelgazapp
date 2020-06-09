const mongoose = require('mongoose')
const Schema = mongoose.Schema
const dishesSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }

})
module.exports = mongoose.model('dishes', dishesSchema)
