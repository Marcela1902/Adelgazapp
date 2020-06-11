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
  if (password.lenght < 8) throw new Error('passwordMustBe8CharactersMinium')

  const hash = await bcrypt.hash(password, 8)

  return Users.create({ ...newUsersData, password: hash })
}

async function login (email, password) {
  const user = await Users.findOne({ email })
  console.log(user)
  if (!user) throw new Error('invaliData')
  const { password: secretWord } = user
  console.log(secretWord)
  const isPasswordCorrect = await bcrypt.compare(password, secretWord)
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
