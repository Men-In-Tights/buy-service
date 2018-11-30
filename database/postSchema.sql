DROP DATABASE stocks;

CREATE DATABASE stocks;

\c stocks;

CREATE TABLE IF NOT EXISTS sidebar(
  id SERIAL PRIMARY KEY,
  stockName VARCHAR(80),
  stockPrice NUMERIC(10,2),
  stockAccount VARCHAR(80),
  currencyCode VARCHAR(80)
)

\COPY sidebar (stockName, stockPrice, stockAccount, currencyCode) FROM '/Users/kanerao/github/SDC/buy-service/sdc/postgres/stocks.csv' WITH (FORMAT CSV, DELIMITER ',');

