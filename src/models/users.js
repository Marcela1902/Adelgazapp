const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  personalData: {
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
    gender: {
      type: String
    }
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
    height: {
      type: Number
    },
    IMC: {
      type: Number
    },
    wristDiameter: {
      type: Number,
      require: true,
      minlength: 2
    }
  },

  direction: {
    street: {
      type: String,
      require: true
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
  }
})
module.exports = mongoose.model('users', userSchema)
