const mongoose = require('mongoose')
const Schema = mongoose.Schema
const dietsSchema = new mongoose.Schema({
  dayNumber: {
    type: Number,
    required: true

  },

  dishes: [{ type: Schema.Types.ObjectId, ref: 'dishes' }]

})
const Diets = mongoose.model('diets', dietsSchema)
module.exports = Diets
