const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/triviaApp', { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.User = require('./user.js');
