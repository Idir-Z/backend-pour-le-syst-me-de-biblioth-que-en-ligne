const authorModel = require('./authorModel')
const bookModel = require('./bookModel')
const authWBookModel = require('./authorWBook')
const sequelize = require('../config/dbConnection')

bookModel.belongsToMany(authorModel, { through: authWBookModel });
authorModel.belongsToMany(bookModel, { through: authWBookModel });

sequelize.sync()
  .then(() => {
    console.log('Database synchronized successfully');
  })
  .catch(error => {
    console.error('Error synchronizing database:', error);
  });

module.exports = {
    authorModel,
    bookModel,
    authWBookModel
}