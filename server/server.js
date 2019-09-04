//Imports
const express = require('express');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
const helmet = require('helmet');
const loadTestData = require('./testData');

//Import Routes
const postsRoute  = require('./routes/posts');

//Create app 
const app = express();

//Middlewares
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', postsRoute);

// connects our back end code with the database
mongoose.connect(config.DB, { useNewUrlParser: true });
let db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to the database');
    loadTestData();
});
db.on('error', (err) => console.log('Error ' + err));

//ROUTES
app.get('/', (req, res) => {
    res.send('Web blog api');
});


//Listening on PORT
app.listen(config.PORT, () => {
    console.log('Server is running on port :', config.PORT);
});