const mongoose = require('mongoose')
const Schema = mongoose.Schema
const directionSchema = new mongoose.Schema({

  _id: Schema.Types.ObjectId,
  street: {
    type: String
  },
  cp: {
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
// module.exports = mongoose.model('direction', directionSchema)

const Direction = mongoose.model('direction', directionSchema)

module.exports = {
  Direction
}
