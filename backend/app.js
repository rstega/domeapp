// Import the express module
const express = require('express');

// Import the mysql module
const mysql = require('mysql');

// Create an instance of express
const app = express();

// Set up a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',     //  my  MySQL host
  user: 'root',          //  my  MySQL username
  password: '',          //  my  MySQL password
  database: 'emmploy-test'     //  my database name
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Create a simple GET request handler to send a response back
app.get('/', (req, res) => {
  res.send('Hello World it is working');
});

// Set up the port to listen to
const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));