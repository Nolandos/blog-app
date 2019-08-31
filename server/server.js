const express = require('express');
const cors = require('cors');

//Import Routes
const apiRoute  = require('./routes/api');

//Create app 
const app = express();

//Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoute);


//ROUTES
app.get('/', (req, res) => {
    res.send('Web blog api');
});


//Listening on PORT
app.listen(8000, () => {
    console.log('Server is running on port : 8000');
});