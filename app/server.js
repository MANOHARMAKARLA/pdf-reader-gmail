const express = require('express');
const app = express();
const port = 3000;
const emailRetrieval = require('./emailRetrieval');
const gmailApi = require('./emailRetrieval');

// Import PDF parsing module
const pdfParser = require('./pdfParser');


// Middleware for parsing JSON requests
app.use(express.json());

// API endpoints

// Endpoint to retrieve a list of parsed transactions
app.get('/transactions', (req, res) => {
  // Implement logic to retrieve and return a list of parsed transactions.
  const transactions = transactionsApi.getTransactions(); // Use your own function to get transactions
  res.json(transactions);
});

// Endpoint to search for transactions within a specific date range
app.get('/transactions/search', (req, res) => {
  // Implement logic to search for transactions within a specific date range.
  const fromDate = req.query.fromDate; // Extract the date range from the request
  const toDate = req.query.toDate;
  const transactions = transactionsApi.searchTransactions(fromDate, toDate); // Use your own function to search transactions
  res.json(transactions);
});

// Endpoint to get the total balance as of a specific date
app.get('/balance', (req, res) => {
  // Implement logic to get the total balance as of a specific date.
  const date = req.query.date; // Extract the date from the request
  const balance = transactionsApi.getTotalBalance(date); // Use your own function to calculate the balance
  res.json({ balance });
});
app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});
