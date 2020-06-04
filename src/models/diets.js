const mongoose = require('mongoose')
const dietsSchema = new mongoose.Schema({
  diets: {
    name: {
      type: String,
      require: true
    },
    category: {
      type: String,
      require: true
    }
  }
})
module.exports = mongoose.model('diets', dietsSchema)
