const dbConfig = require("../config/dbConfig.js");
const { Sequelize } = require('sequelize');
const sqlite = require('sqlite3').verbose()

// Initialize Sequelize with SQLite dialect and specify database file path
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'C:/Users/HP/Desktop/appli mob/back_end/data/test.db',
});

module.db = new sqlite.Database('../data/test.db', (err) => {
  if (err) {
      console.error('Error connecting to the database:', err.message);
  } else {
      console.log('Connected to the database.');
  }
});

module.exports = sequelize;
