const faker = require('faker');
const path = require('path');
const fs = require('fs');

// const randomNumGenerator = function(min, max, decimalPlaces) {
//   var rand = (Math.random() * (max - min)) + min;
//   var power = Math.pow(10, decimalPlaces);
//   return Math.floor(rand * power) / power;
// }

const streamStock = fs.createWriteStream(path.join(__dirname, 'stocks.csv'));
const fakeStockData = (index) => {
  for (var i = index; i <= 10000000; i++) {
    // let stockId = i;
    let stockName = faker.company.companyName();
    let stockPrice = faker.finance.amount(10.00, 500.00, 2);
    let stockAccount = faker.finance.account();
    let currencyCode = faker.finance.currencyCode();

    if (!streamStock.write(`${stockName}, ${stockPrice}, ${stockAccount}, ${currencyCode}\n`)) {
      streamStock.once('drain', () => fakeStockData(i + 1));
      return;
    // streamStock.write(`${stockName}, ${stockPrice}, ${stockAccount}, ${currencyCode}\n`)
    }
  }  
  streamStock.end();
}

fakeStockData(1);
