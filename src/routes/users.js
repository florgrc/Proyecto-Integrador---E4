const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

const path = require("path");


router.get('/register', usersController.register);
router.post('users/register', usersController.create);
router.get('/login', usersController.login);

module.exports = router;