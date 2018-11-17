const path = require('path');
const db = require('./index.js');

async function seed() {
  await db.query(`CREATE TABLE IF NOT EXISTS Stocks`) // add column names and data types

  await db.query(`COPY tablename (column names) FROM `${path.join(__dirname, './stocks.csv')}` WITH (FORMAT csv);`)

  db.end()

}

// do it again for the next tables