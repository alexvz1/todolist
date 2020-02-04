const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const mongoose = require('mongoose');

const app = express();

//db connectio
const uri = 'mongodb://localhost:27017';
mongoose.connect(uri, {dbName: 'todo_list', useUnifiedTopology: true,  useNewUrlParser: true })
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

const indexRoutes = require('./routes/index.js');
//settings
app.set('port', process.env.PORT || 5001);

//middlewares

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors());

// routes
app.use('/api', indexRoutes);

app.listen(app.get('port'), () => {
    console.log("servert on port " + app.get('port'));
});