const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
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

  diets: {
    name: {
      type: String,
      required: true,
      enum: ['dieta de volumen', 'dieta de tonificacion', 'dieta para adelgazar']
    },
    category: {
      type: String,
      required: true
    }
  },

  direction: {
    street: {
      type: String,
      required: true
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
module.exports = mongoose.model('users', usersSchema)
