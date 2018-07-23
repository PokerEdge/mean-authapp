const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

// Import all the user routes from another file
const users = require('./routes/users');

const port = 3000;

// CORS module allows us to make app public while authentication limits app access
app.use(cors());

// Set static folder for public files (client)
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware - Parses incoming request body so it can be grabbed (as JSON)
app.use(bodyParser.json());

// Any route within ./routes/users is placed after '/users'
app.use('/users', users);

// Goes to front end index file, index route
app.get('/', (req, res) => {
    res.send('INVALID ENDPOINT');
});

app.listen(port, () => {
    console.log(`Sever started on port ${port}`);
});