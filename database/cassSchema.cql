DROP KEYSPACE IF EXISTS stocks;
DROP TABLE IF EXISTS stocks.sidebar;

CREATE KEYSPACE IF EXISTS stocks;
DROP TABLE IF EXISTS stocks.sidebar;
CREATE KEYSPACE IF NOT EXISTS stocks WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE stocks;

CREATE TABLE IF NOT EXISTS stocks.sidebar (
  id INT PRIMARY KEY,
  stockName text,
  stockPrice decimal,
  stockAccount text,
  currencyCode text
);

COPY stocks.sidebar (id, stockName, stockPrice, stockAccount, currencyCode) FROM '/Users/kanerao/github/SDC/buy-service/sdc/cassandra/stocks.csv' WITH DELIMITER = ',' AND HEADER = true;