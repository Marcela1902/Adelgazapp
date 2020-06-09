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
    email: {
      type: String,
      require: true,
      unique: true,
     // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
      type: String,
      require: true,
      minLength: 8
    },

    gender: {
      type: String
    }
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
      
      minlength: 2
    }
  },

  /*diets: {
    name: {
      type: String,
      required: true,
      enum: ['dieta de volumen', 'dieta de tonificacion', 'dieta para adelgazar']
    },
    category: {
      type: String,
     
    }
  },*/

  direction: {
    street: {
      type: String,
      
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
