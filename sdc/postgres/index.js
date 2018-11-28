const {Client} = require('pg');

const client = new Client({
  user: 'kanerao', // mac username
  host: 'localhost',
  database: 'stocks', // mac username
  password: '',
  port: 5432, // default postgres port
})

client.connect();

var getOne = function(id, callback) {
  var stock = `SELECT * from sidebar where id = ${id}`
  client.query(stock, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

var insertOne = function(stockName, stockPrice, stockAccount, currencyCode, callback) {
  const newQuery = `INSERT into sidebar (stockName, stockPrice, stockAccount, currencyCode) VALUES ($1, $2, $3, $4)`;
  client.query(newQuery, [stockName, stockPrice, stockAccount, currencyCode], function(err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}
// getOne(2, (err, results) => {console.log(err, results)});
// insertOne('Homies and Barts', 453.45, '56377875', 'EUR', (err, results) => 
//   {console.log(err, results)});

// var getAll = function(callback) {
//   client.query('SELECT * from sidebar', function(error, results) {
//     if (error) {
//       callback(error, null);
//     } else {
//       callback(null, results);
//     }
//   })
// }




module.exports = client;
module.exports.getOne = getOne;
module.exports.insertOne = insertOne;
// module.exports.getAll = getAll;