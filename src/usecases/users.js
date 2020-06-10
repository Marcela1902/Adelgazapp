const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')
const Users = require('../models/users')

function getAll (id) {
  return Users.find(id)
}

/*function create (userData) {
  return Users.create(userData)
}*/

function deleteById (id) {
  return Users.findByIdAndRemove(id)
}

function updateById (id, newUserData) {
  return Users.findByIdAndUpdate(id, newUserData)

}


async function signup (newusersData) {
  const { email, password } = newusersData
  if (!email) throw new Error('Email is required')
  const userAlreadyExists = await Users.findOne({ email })
  if (userAlreadyExists) throw new Error('mail is already registered')
  if (password.lenght < 6) throw new Error('password must be 6 characters minium')
   const hash = await bcrypt.hash(password, 8)


  return Users.create({ ...newusersData, password: hash })
}
async function signup (userData) {
  
  const { name,lastName, email, password} = userData.personalData
  if (!email) throw new Error('Email address is required')
  if (!password) throw new Error('Password is required')
  if (password.length < 8) throw new Error('Password must be at greater than 8 characters')
  
  const userAlreadyExists = await Users.findOne({ personalData:{email}})
  console.log(userAlreadyExists)
  if (userAlreadyExists) throw new Error('Email is already in use')
  
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
