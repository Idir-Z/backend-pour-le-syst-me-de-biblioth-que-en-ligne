const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../config/dbConnection')

const author = sequelize.define('Author',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,

    },
    birthDate: {
        type: DataTypes.DATE
    },
    nationality: {
        type:DataTypes.STRING
    }
},{
    timestamps: false 
  })
module.exports = author
