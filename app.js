// app.js
var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./userController');
app.use('/users', UserController);

module.exports = app;