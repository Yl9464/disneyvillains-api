const Sequelize = require('sequelize')
const villainsModel = require('./villains')

const connection = new Sequelize('villainsdb', 'villains', 'villainsPassword', {
  host: 'localhost', dialect: 'mysql'
})

const villains = villainsModel(connection, Sequelize)

module.exports = { villains }
