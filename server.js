const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const db = require('./config/key').mongoURI;
const port = process.env.Port || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());


// MongoDB connection
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected .....')) 
    .catch(err => console.log(err));
app.listen(port, () => console.log(`Server connected on port ${port}`));

//use routes
app.use('/items', require('./routes/items'));
app.use('/buyer', require('./routes/buyer'));
app.use('/vendor', require('./routes/vendor'));
