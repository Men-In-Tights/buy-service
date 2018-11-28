const faker = require('faker');

// const randomNumGenerator = function(min, max, decimalPlaces) {
//   var rand = (Math.random() * (max - min)) + min;
//   var power = Math.pow(10, decimalPlaces);
//   return Math.floor(rand * power) / power;
// }


const generateRandomDataPoint = (userContext, events, done) => {
  let stockId = Math.floor(Math.random() * 10000000);
  let stockName = faker.company.companyName().replace(',','');
  let stockPrice = faker.finance.amount(10.00, 500.00, 2);
  let stockAccount = faker.finance.account();
  let currencyCode = faker.finance.currencyCode();

  userContext.vars.stockId = stockId;
  userContext.vars.stockName = stockName;
  userContext.vars.stockAccount = stockAccount;
  userContext.vars.currencyCode = currencyCode;

  return done();
}

module.exports = {
  generateRandomDataPoint,
}


