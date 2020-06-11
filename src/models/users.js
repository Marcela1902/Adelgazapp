const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  telephone: {
    type: Number,
    minlength: 10
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
  gender: {
    type: String
  },

  height: {
    type: Number
  },
  IMC: {
    type: Number
  },
  wristDiameter: {
    type: Number,
    minlength: 2
  },

  street: {
    type: String
  },
  CP: {
    type: Number
  },
  numberExt: {
    type: Number
  },
  numberInt: {
    type: Number
  },
  colonia: {
    type: String
  },
  city: {
    type: String
  },
  reference: {
    type: String

  }

})
module.exports = mongoose.model('users', usersSchema)
