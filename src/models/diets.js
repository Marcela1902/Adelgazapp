const mongoose = require('mongoose')
const Schema = mongoose.Schema
const dietsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true

  },

  dishes: [{ type: Schema.Types.ObjectId, ref: 'dishes' }]

})
const Diets = mongoose.model('diets', dietsSchema)
module.exports = {
  Diets
}
