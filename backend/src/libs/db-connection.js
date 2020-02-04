const mongoose = require('mongoose');

let db; 
const dbpath = "mongodb://localhost:27017";

module.exports = function connection () {
    if(!db) {
        db = mongoose.connect(dbpath, {dbName: 'tes_table2', useUnifiedTopology: true,  useNewUrlParser: true })
    }
    return db;
}