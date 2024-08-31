const sequelize = require('../config/dbConnection')

const authorWBook = sequelize.define('AuthorWBook', {
    
  }, {
    timestamps: false 
  });
module.exports = authorWBook;