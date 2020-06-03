const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  personalData: {
    name: String,
    lastName: String,
    telephone: Number,
    age: Number
  },
  email: {
    type: String,
    required: true

  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  complexion: {
    height: Number,
    IMC: Number,
    diameter: Number,
    minlength: 2
  },
  morphology: {
    mesomorfo: String,
    endomorfo: String,
    hectomorfo: String
  },
  direction: {
    street: String,
    CP: Number,
    numberExt: Number,
    numberInt: Number
  }
})
module.exports = mongoose.model('users', userSchema)
