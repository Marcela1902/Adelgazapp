const bcrypt = require('bcrypt')

const jwt = require('../lib/jwt')

const Users = require('../models/users')

function getAll (id) {
  return Users.find(id)
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

async function signup (newUsersData) {
  const { email, password } = newUsersData
  console.log(email, password)
  if (!email) throw new Error('Email is required')
  const usersAlreadyExists = await Users.findOne({ email })

  if (usersAlreadyExists) throw new Error('mailIsAlreadyRegistered')
  if (password.lenght < 12) throw new Error('passwordMustBe6CharactersMinium')

  const hash = await bcrypt.hash(password, 8)

  return Users.create({ ...newUsersData, password: hash })
}

async function login (email, password) {
  const user = await Users.findOne({ email })
  if (!user) throw new Error('invalidData')

  const isPasswordCorrect = await bcrypt.compare(password, user.password)
  if (!isPasswordCorrect) throw new Error('invaliData')

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
