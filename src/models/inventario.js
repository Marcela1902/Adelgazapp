const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  supplements: {
    name: String,
    price: Number,
    quantity: Number
  },
  products: {
    name: String,
    price: Number,
    quantity: Number,
    description: String
  }
})
module.exports = mongoose.model('users', userSchema)
