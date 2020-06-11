const mongoose = require('mongoose')
// const Schema = mongoose.Schema
const directionSchema = new mongoose.Schema({
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
module.exports = mongoose.model('direction', directionSchema)
