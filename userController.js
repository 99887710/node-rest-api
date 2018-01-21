// UserController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

var createUser = require('./user/createUser');
var findAllUsers = require('./user/findAllUsers');
var findById = require('./user/findById');

// CREATES A NEW USER
router.post('/', createUser);

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', findById);

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', findAllUsers);



module.exports = router;