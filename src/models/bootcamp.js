const sequelize = require('../database');
const { DataTypes } = require('sequelize');

const Bootcamp = sequelize.define('bootcamp', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cue: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 5,
            max: 10,
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = Bootcamp;