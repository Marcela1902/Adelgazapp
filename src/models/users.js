const mongoose = require('mongoose')
const Schema = mongoose.Schema
const usersSchema = new mongoose.Schema({
  // id: Schema.Types.ObjectId,
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
  idTest: {
    type: Schema.Types.ObjectId,
    ref: 'PhysicalDetails'
  },
  // eatingPlan: [{ type: Schema.Types.ObjectId, ref: 'eatingPlan' }],
  direction: { type: Schema.Types.ObjectId, ref: 'direction' },
  eatingPlans: [{ type: Schema.Types.ObjectId, ref: 'eatingPlan' }],
  idBuy: [{ type: Schema.Types.ObjectId, ref: 'shoppingCart' }]
})

module.exports = mongoose.model('users', usersSchema)
