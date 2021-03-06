//MONGO CONNECTION: mongodb+srv://Cristina:<password>@cluster0.rxnku.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user')

const app = express();

mongoose.connect('mongodb+srv://Cristina:<JGpybVNICADfl46R>@cluster0.rxnku.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas!')
    })
    .catch((error) => {
        console.log('Unable to connect to MongoDb Atlas!');
        console.error(error);
    });

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;