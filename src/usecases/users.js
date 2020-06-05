const bcrypt = require('bcrypt')

const jwt = require('../lib/jwt')

const Users = require('../models/users')

async function getAll () {
  const allUsers = await Users.find()
  return allUsers
}

function create (userData) {
  return Users.create(userData)
}

function deleteById (id) {
  return Users.findByIdAndRemove(id)
}

function updateById (id, newUserData) {
  return Users.findByIdAndUpdate(id, newUserData)
}

async function signup (newUserData) {
  const { email, password } = newUserData
  if (!email) throw new Error('Email is required')
  const userAlreadyExists = await Users.findOne({ email })

  if (userAlreadyExists) throw new Error('mail is already registered')
  if (password.lenght < 6) throw new Error('password must be 6 characters minium')

  const hash = await bcrypt.hash(password, 8)

  return Users.create({ ...newUserData, password: hash })
}

async function login (email, password) {
  const user = await Users.findOne({ email })
  if (!user) throw new Error('invalid data')

  const isPasswordCorrect = await bcrypt.compare(password, user.password)
  if (!isPasswordCorrect) throw new Error('invalid data')

  return jwt.sign({ id: user._id })
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById,
  signup,
  login
}
