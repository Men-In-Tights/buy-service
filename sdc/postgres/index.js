const {Client} = require('pg');

const client = new Client({
  user: 'kanerao', // mac username
  host: 'localhost',
  database: 'kanerao', // mac username
  password: '',
  port: 5432, // default postgres port
})

client.connect();

console.log('hi');

module.exports = client;