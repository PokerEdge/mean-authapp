const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const port = 3000;

// Goes to front end index file
app.get('/', (req, res) => {
    res.send('INVALID ENDPOINT');
});

app.listen(port, () => {
    console.log(`Sever started on port ${port}`);
});