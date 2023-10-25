# Gmails System


## Overview

The "Gmails System" is a project that allows you to retrieve emails, parse PDF files, and provides an Express.js API for various operations. It can be used for tasks such as managing emails, extracting data from PDFs, and more.

## Features

- Email retrieval and notification via Gmail.
- PDF file text extraction.
- API endpoints for interacting with the system.

## Prerequisites

Before using the "Gmails System," make sure you have the following prerequisites:

- Node.js
- Express.js (v4.18.2 or higher)
- Nodemailer (v6.9.7 or higher)
- pdf-parse (v1.1.1 or higher)

## Installation

To set up and run the "Gmails System," follow these steps:

1. Clone this repository to your local machine.
2. Install project dependencies by running `npm install`.
3. Configure your email credentials in the `emailRetrieval.js` file.
4. Start the server with `node index.js`.

## Usage

The "Gmails System" can be used for various tasks through its API endpoints:

- To retrieve a list of transactions, make a GET request to `/transactions`.
- To search for transactions within a specific date range, make a GET request to `/transactions/search` with the `fromDate` and `toDate` query parameters.
- To get the total balance as of a specific date, make a GET request to `/balance` with the `date` query parameter.

## API Endpoints

The following API endpoints are available:

### GET `/transactions`

Description: Retrieve a list of parsed transactions.
