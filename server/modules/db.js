var mongoose = require('mongoose');
var databaseUrl = 'mongodb://localhost:27017/messages';

mongoose.connection.on('connected', function () {
    console.log('Mongoose is connected');
});

mongoose.connection.on('error', function () {
    console.log('Mongoose failed to connect');
});

mongoose.connect(databaseUrl);

module.exports = mongoose;