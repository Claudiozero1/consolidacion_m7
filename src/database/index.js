const { Sequelize } = require('sequelize')
const configDB = require('../config/db')

const sequelize = new Sequelize(configDB);

module.exports = sequelize;