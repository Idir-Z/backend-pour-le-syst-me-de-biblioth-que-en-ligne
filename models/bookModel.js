const { Sequelize, DataTypes } = require('sequelize')
const  sequelize  = require('../config/dbConnection')

const book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        
    },
    releaseDate: {
        type: DataTypes.DATE
    },
    ISBN: {
        type: DataTypes.STRING
    }
}, {
    // Define model options here
    timestamps: false // Disable automatic timestamps
});
  

module.exports = book
