const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    title: String, 
    description: String, 
    dateAdded: Date,
    status: Boolean
}, {collection:'tasks'});

module.exports = mongoose.model('Task', Schema)