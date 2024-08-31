
const express = require('express')
const app = express()
const cors = require('cors')
const bookRoute = require('./routes/bookRoute')
const authorRoute = require('./routes/authorRoute')
const {authorModel,authWBookModel,bookModel} = require('./models/index')
require('./models/index')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/books', bookRoute)
app.use('/authors',authorRoute)


app.listen(3000, ()=> console.log('app is running on port '+"3000"))














// connection test   come back later
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'admin',
//     database: 'base'
// })
// connection.query('SELECT * FROM users', function (error, results, fields) {
//     if (error) {
//       console.error('Error executing query:', error);
//       return;
//     }
  
//     // Log the results
//     console.log('Query results:', results);
  
//     // You can loop through the results here and process them as needed
//   });

//   connection.end();
