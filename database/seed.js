const db = require('./index.js');
var BPower = require('./BPower.js');
var Buy = require('./Buy.js');
var faker = require('faker');


var fakeId = faker.random.number();
var fakeName = faker.company.companyName();
var fakePrice = faker.finance.amount(23.46, 567.98, 2);
var fakeAccount = faker.finance.account();
var fakeSymbol = faker.finance.currencyCode();

const samplePostGen = function () {
  for (var i = 0; i < 101; i++) {
    let samplePosts = [
      {
        id: i,
        symbol: faker.finance.currencyCode(),
        name: faker.company.companyName(),
        marketPrice: faker.finance.amount(23.46, 567.98, 2),
      }
    ];
    let samplePurchase = function() {
      Buy.create(samplePosts)
        .then(() => db.disconnect());
    };
    samplePurchase();
  }
};



const sampleBPowerGen = function () {
  for (var i = 0; i < 101; i++) {
    let output = [
      {
        id: i,
        marketPrice: faker.finance.amount(23.46, 567.98, 2),
      },
    ];
    
    let sampleBPower = function() {
      BPower.create(output)
        .then(() => db.disconnect());
    };
    sampleBPower();
  } 
};

samplePostGen();
sampleBPowerGen();

