const mongoose = require('mongoose')
const dietsSchema = new mongoose.Schema({
  diets: {
    name: {
      type: String,
      require: true
    },
    description: {
      type: String,
      maxlength: 400
    },
    foodName: {
      type: String,
      require: true
    }

  }
})
module.exports = mongoose.model(' diets', dietsSchema)
